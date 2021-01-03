const bcryptjs = require('bcryptjs');

function lowerCaseAndNoSpace(text) {
    return text.trim().toLowerCase();
}

async function cipherPassword(password) {
    const salt = await bcryptjs.genSaltSync(10);
    const newPassword = await bcryptjs.hash(password, salt);
    return newPassword;
}

async function decipherPasswordAndCompare(password, encryptedPassword) {
    const success = await bcryptjs.compare(password, encryptedPassword);
    return success;
}

module.exports = {
    lowerCaseAndNoSpace, cipherPassword, decipherPasswordAndCompare
}