const app = require('./app')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({
    path: './config.env'
})

const DB = process.env.MONGO_URI;

mongoose.connect(DB, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (() => console.log('connected to the database'))

const PORT = 5000;
app.listen(PORT, () => console.log('the server is connected'))