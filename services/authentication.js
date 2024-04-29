const JWT = require("jsonwebtoken");

const secret ="ironMan@064";

function createTokenForUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL: user.profileImageURL,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function verifyToken(token) {
    return JWT.verify(token, secret);
    return payload;
}

    module.exports = {
        createTokenForUser,
        verifyToken,
    }