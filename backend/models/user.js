const mongoose = require("mongoose");
const validator = require("validator"); 

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            maxLength: [30, "Can not exceed 30"],
            minLength: [5, "more than 5 is needed"],
            
        },
        email:{
            type: String,
            required: true,
            unique: true,
            validate: [validator.isEmail, "enter email"]
            
        },
        password:{
            type: String,
            required: true,
            minLength: [8, "more than 8 is needed"],
            select: false            
        },

    }
)