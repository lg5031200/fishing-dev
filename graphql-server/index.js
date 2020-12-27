const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  #   type fish {
  #     name: String!
  #     source: String!
  #   }
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Welcome to my fishing server!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
