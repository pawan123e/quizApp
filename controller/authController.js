const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')
const ErrorClass = require('../ErrorClass')
const asyncError = require('../asyncError')

exports.register = asyncError(async (req, res) => {
    
        const user = await User.create(req.body);
        const token = await jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '3d'});
        res.json({
            status: 'success',
            token
        })
})

exports.login = asyncError (async (req, res, next) => {
    
        const {email, password} = req.body;
        if(!email || !password) {
            return next(new ErrorClass('Please provide email or password', 400));
        }

        const user = await User.findOne({email: email}).select('+password');
        if(!user || (!await user.passwordCheck(password, user.password ))) {
            return next(new ErrorClass('Email or Password is incorrect', 401))
        }
        const token = await jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: '3d'});
        res.json({
            status: 'success',
            token
        })
    
})

exports.protect = async (req, res, next) => {
    if(!req.headers.authorization) {
        return next(new ErrorClass('Authorization denied'), 401);
    }
    const token = req.headers.authorization;
    
    try {
    const user = jwt.verify(token, process.env.SECRET_KEY);
    req.user = user;

    } catch (err) {
      return next(new ErrorClass(err.message, 403))  
    }
    
    next();
}

exports.getUser = asyncError (async (req, res, next) => {
   
        const user = await User.findById(req.user.id);
        res.json({
            user
        })
    
})