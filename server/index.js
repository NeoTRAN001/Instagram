const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./gql/schema');
const resolvers = require('./gql/resolver');
require('dotenv').config({ path: ".env" });

// Config Server Connection
mongoose.connect(process.env.BBDD, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}, (err, _) => {
    if(err) console.log('Error connection');
    else server();
});

// Server On with apollo and Schema, Resolver files
function server() {
    const serverApollo = new ApolloServer({
        typeDefs, resolvers
    });

    serverApollo.listen().then(({ url }) => {
        console.log(`Server ON in: ${url}`)
    });
}