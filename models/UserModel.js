const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        validate: [validator.isEmail, 'Please provide a valid email address'],
        unique: [true, 'User already exists']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'Password should be greater than 8 characters'],
        select: false
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please provide a confirm password'],
        validate: {
            validator:  function (el) {
               return el === this.password
            },
            message: 'Password should be equal'
        }
    }
})

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
})

userSchema.methods.passwordCheck = async function(userPassword, password) {
    return await bcrypt.compare(userPassword, password)
}

const User = mongoose.model('User', userSchema);
module.exports = User;