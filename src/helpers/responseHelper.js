const sendSuccess = (res, message, data, statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

const sendError = (res, statusCode, message) => {
    res.status(statusCode).json({
        success: false,
        error: {
            message,
        },
    });
};

module.exports = {
    sendSuccess,
    sendError,
};
