const errorController = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';
    if(error.code === 11000) {
        error.message = 'User already exist.'
    }
    res.status(error.statusCode).json({
        message: error.message,
        error
    })
}

module.exports = errorController;