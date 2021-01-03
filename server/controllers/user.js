const User  = require('../models/user');
const Props = require('../helpers/props');
const Token = require('../helpers/token');

function getUser() {
    console.log('Get Users :D');
    return null;
}

async function register(input) {
    const newUser = input;
    newUser.email = Props.lowerCaseAndNoSpace(newUser.email);
    newUser.username = Props.lowerCaseAndNoSpace(newUser.username);

    const { email, username, password } = newUser;
    const foundEmail = await User.findOne({ email }); // Validate if email exists
    const foundUsername = await User.findOne({ username }); // Validate if username exists

    if(foundEmail) throw Error("The email already exists");
    if(foundUsername) throw Error("The username already exists");

    newUser.password = await Props.cipherPassword(newUser.password); // Cipher Password

    try {
        const user = new User(newUser); user.save();
        return user;
    } catch(error) { console.log(error); }
}

async function login(input) {
    const { email, password } = input;

    const userFound = await User.findOne({email: email.toLowerCase() });
    if(!userFound ) throw new Error("Error in email or password");
    
    const passwordSuccess = await Props.decipherPasswordAndCompare(password, userFound.password);
    if(!passwordSuccess ) throw new Error("Error in email or password");

    return {
        token: Token.createToken(userFound)
    };
}

module.exports = {
    register, getUser, login
};