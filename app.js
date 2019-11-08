const express = require('express');
const app = express();
const router = require('./routes/userRoute')
const errorController = require('./controller/errorController')

app.use(express.json())
app.use('/api/user', router);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('quiz/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'quiz', 'build', 'index.html')));
}


app.use(errorController) ;

module.exports = app;