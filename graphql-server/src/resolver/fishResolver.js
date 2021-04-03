const { Fish } = require('../model/fish');

const resolvers = {
  Query: {
    fishes: async (_, args) => {
      const { param } = args;

      if (param && Object.values(param).length !== 0) {
        if (param.zh_name) {
          param.zh_name = new RegExp(param.zh_name);
        }
        if (param.category) {
          Object.assign(param, { category: { $in: param.category } });
        }
      }

      try {
        const response = await Fish.find(param).exec();

        return response;
      } catch (e) {
        return e.message;
      }
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
