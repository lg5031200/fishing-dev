const { Fish } = require('../model/fish');

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

module.exports = { resolvers };
