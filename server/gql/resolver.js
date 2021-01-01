const resolver = {
    Query: {
        // User
        getUser: () => {
            console.log('Get Users :D');
            return null;
        }
    }
};

module.exports = resolver;