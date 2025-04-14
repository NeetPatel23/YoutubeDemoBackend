class apiError extends Error {
  constructor(
    message, 
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.isOperational = true;
    this.message = message;
    this.errors = errors;
    this.success = false;

    if(stack) {
        this.stack = stack;
    }else {
        Error.captureStackTrace(this, this.constructor);
    }       
  }
}


export { apiError };