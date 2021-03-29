const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('./config');

const { Fish } = require('./model');

const typeDefs = gql`
  type Query {
    fishes: [Fish!]!
  }
  type Mutation {
    addFish(input: FishInput!): Fish!
  }

  type Fish {
    id: ID!
    zh_name: String!
    en_name: String!
    category: [Category!]!
    introduction: String!
    habitat: String!
    imageSrc: String!
  }

  input FishInput {
    zh_name: String!
    en_name: String!
    category: [Category!]!
    introduction: String!
    habitat: String
    imageSrc: String!
  }

  enum Category {
    BIG
    SMALL
    MEDIUM
    MEAT
    HERBIVOROUS
    OMNIVORE
    SEA_WATER
    FRESH_WATER
  }
`;

const resolvers = {
  Query: {
    fishes: async () => {
      const result = await Fish.find({}).exec();
      return result;
    },
  },
  Mutation: {
    addFish: async (_, args) => {
      const { input } = args;
      try {
        const response = await Fish.create(input);
        return response;
      } catch (e) {
        return e.message;
      }
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
