require('./db');
require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { resolvers } = require('./src/resolver/fishResolver');
const { typeDefs } = require('./src/schema/graphqlSchema');

function createApp() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  server.applyMiddleware({ app });
  console.log(process.env.PORT)

  app.listen({ port: process.env.PORT || 5000 }, () =>
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  );
}

createApp();
