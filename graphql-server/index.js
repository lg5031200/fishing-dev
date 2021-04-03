require('./db');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { resolvers } = require('./src/resolver/fishResolver');
const { typeDefs } = require('./src/schema/graphqlSchema');

function createApp() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

createApp();
