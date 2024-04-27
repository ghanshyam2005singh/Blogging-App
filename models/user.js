const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    salt: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
        required: true, 
    },
    profileImageURL:{
        type: String,
        default: "/images/default.png"
    },
    role: {
        trype: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    },
},
{timestamps: true});

const user = model("user", userSchema);

module.exports = user;