const asyncHandler = (asyncFunction) => {
    (req,res,next) => {
        Promise
        .resolve(asyncFunction(req,res,next))
        .catch( (error) => next(error))
    }
}

// const asyncHandler = (fn) => async (req,res,next) => {

//     try {
//         await fn(req,res,next);
//     } catch (error) {
//         res.status(500).json({
//             status: "error",
//             message: error.message,
//         });
//     }

// }

export { asyncHandler };