const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors  = require("../middleware/catchAsyncErrors");
const User = require("../models/user");

// register user

exports.registerUser = catchAsyncErrors(async(req, res, next) => {

    const {name, email, password} = req.body
})