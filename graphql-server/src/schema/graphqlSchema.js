const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    fishes(param: SearchFish): [Fish!]!
  }
  type Mutation {
    addFish(input: FishInput!): Fish!
  }

  type Fish {
    id: ID!
    zh_name: String!
    en_name: String!
    category: [FishTag!]!
    introduction: String!
    habitat: String!
    imageSrc: String!
  }

  input SearchFish {
    category: [FishTag!]
    zh_name: String
    en_name: String
  }

  input FishInput {
    zh_name: String!
    en_name: String!
    category: [FishTag!]!
    introduction: String!
    habitat: String
    imageSrc: String!
  }

  enum FishTag {
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

module.exports = { typeDefs };
