const jwt = require('jsonwebtoken');

function createToken(user) {
    const SECRET_KEY = process.env.SECRET_KEY;
    const expiresIn = "24h"
    const { id, name, email, username } = user;

    const payload = {
        id,
        name,
        email,
        username
    };

    return jwt.sign(payload, SECRET_KEY, { expiresIn })
}

module.exports = {
    createToken,
}