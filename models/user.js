const { createHmac, randombits} = require("crypto");

const {Schema, model} = require("mongoose");
const { createTokenForUser } = require("../services/authentication");

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

userSchema.pre("save", function (next) {
    const user = this;

    if(!user.isModified("password")) return;
    
    const salt = randombits(128).toString("base64");
    const hashedPassword = createHmac("sha256", salt).update(user.password)
    .digest("hex");
     
    this.salt = salt;
    this.password = hashedPasswword;

    next();
});

userSchema.static("matchPasswordAndGenerateToken", function (email, password) {
    const user = this.findOne({email});
    if (!user) throw new Error("User not found");

    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedHash = createHmac("sha256", salt)
    .update(password)
    .digest("hex"); 

    if (hashedPassword !== userProvidedHash) throw new Error("Password incorrect")

    const token = createTokenForUser(user);
});

const User = model("user", userSchema);

module.exports = user;