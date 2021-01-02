const User = require('../models/user');
const bcryptjs = require('bcryptjs');

function lowerCaseAndNoSpace(text) {
    return text.trim().toLowerCase();
}

const resolver = {
    Query: {
        // User
        getUser: () => {
            console.log('Get Users :D');
            return null;
        }
    },
    Mutation: {
        // User
        register: async (_, { input }) => {
            const newUser = input;
            newUser.email = lowerCaseAndNoSpace(newUser.email);
            newUser.username = lowerCaseAndNoSpace(newUser.username);

            const { email, username, password } = newUser;
            const foundEmail = await User.findOne({ email }); // Validate if email exists
            const foundUsername = await User.findOne({ username }); // Validate if username exists

            if(foundEmail) throw Error("The email already exists");
            if(foundUsername) throw Error("The username already exists");

            const salt = await bcryptjs.genSaltSync(10);
            newUser.password = await bcryptjs.hash(password, salt); // Cipher Password

            try {
                const user = new User(newUser);
                user.save();
                return user;
            } catch(error) {
                console.log(error);
            }
        }
    }
};

module.exports = resolver;