const userController = require('../controllers/user');
const user = require('../models/user');

const resolver = {
    Query: {
        // User
        getUser: () => userController.getUser(),
    },
    Mutation: {
        // User
        register: (_, { input }) => userController.register(input),
        login: (_, { input }) => userController.login(input),
    }
};

module.exports = resolver;