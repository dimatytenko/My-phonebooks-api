const { HttpCode } = require("../libs/constants");

class CustomError extends Error {
  constructor(statusCode, message, name = "AppError") {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4")
      ? "error"
      : "fail";
    this.name = name;
    Error.captureStackTrace(this, this.constructor);
  }
}

const wrapper = (fn) => async (req, res, next) => {
  try {
    const result = await fn(req, res, next);
    return result;
  } catch (error) {
    switch (error.name) {
      case "ValidationError":
        res.status(HttpCode.BAD_REQUEST).json({
          status: "error",
          code: HttpCode.BAD_REQUEST,
          message: error.message,
        });
        break;

      case "AppError":
        res.status(error.statusCode).json({
          status: error.statusCode,
          code: error.statusCode,
          message: error.message,
        });
        break;

      default:
        next(error);
        break;
    }
  }
};

module.exports = { CustomError, wrapper };
