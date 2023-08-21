const mongoose = require("mongoose");
const validator = require("validator"); 

const userSchema = new mongoose.Schema(
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
        avatar:
            {
                    public_id:{
                    type:String,
                    required: true
                },
                url:{
                    type:String,
                    required: true
                }
            },
            role:{
                type: String,
                default: "user"
            },
            resetPasswordToken:String,
            resetPasswordExpire:Date,

    }
);

module.exports = mongoose.model("User", userSchema);