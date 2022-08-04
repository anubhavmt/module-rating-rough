import { graphql } from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

const globalquery = graphql`
  query QueryGlobalQuery($resourceId: ID!, $userId: ID!) {
    getResourceRatingFeedback(resourceId: $resourceId) {
      resourceId
      Configurations {
        enableRatingsOnResource
        enableFeedbackOnResourse
      }
      ...Overall_ResouceFragment
    }

    getUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {
      userId
      resourceId
      rating
      feedback
      updatedAt
    }
  }
`;

export { globalquery };
