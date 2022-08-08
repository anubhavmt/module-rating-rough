import { graphql } from "babel-plugin-relay/macro";

const globalquery = graphql`
  query QueryGlobalQuery($resourceId: ID!, $userId: ID!) {
    getResourceRatingFeedback(resourceId: $resourceId) {
      id
      Configurations {
        enableRatingsOnResource
        enableFeedbackOnResourse
      }
      ...Overall_ResouceFragment
    }

    getUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {
      id
      resourceId
      rating
      feedback
      ...Feedback_UserFragment
      ...Ratings_UserRatings
    }
  }
`;

export { globalquery };
