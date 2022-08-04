const { ApolloServer, gql } = require("apollo-server");
const path = require("path");
const { readFileSync } = require("fs");

const schemaPath = path.resolve(__dirname, "../schema.graphql");
const appTypeDefs = readFileSync(schemaPath, { encoding: "utf-8" });
const typeDefs = gql(appTypeDefs);

const Resource = {
  resourceId: "1",
  resourceType: "random",
  Configurations: {
    enableRatingsOnResource: false,
    enableFeedbackOnResourse: false,
  },
  averageRating: 4.6,
  totalRatings: 1000,
};

const user = {
  userId: "2",
  resourceId: "1",
  rating: 0,
  feedback: "",
  updatedAt: 2,
};

const resolvers = {
  Query: {
    getResourceRatingFeedback: (parent, args, context, info) => {
      return Resource;
    },
    getUserResourceRatingFeedback: (parent, args, context, info) => {
      return user;
    },
  },
  Mutation: {
    setUserResourceRatingFeedback(parent, args, context, info) {
      if (args["rating"] !== undefined) user.rating = args.rating;
      if (args["feedback"] !== undefined) user.feedback = args.feedback;
      return user;
    },
    setResourceRatingFeedbackConfiguration(parent, args, context, info) {
      console.log(args);
      Resource.Configurations = args.configurations;
      return Resource;
    },
    resetUserResourceRatingFeedback(parent, args, context, info) {
      console.log(args);
      user.feedback = "";
      user.rating = 0;
      user.updatedAt = 0;
      return user;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
