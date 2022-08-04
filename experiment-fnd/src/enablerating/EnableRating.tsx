import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { commitMutation, useLazyLoadQuery } from "react-relay";
import environment from "../RelayEnvironment";

const RatingConfig = graphql`
  query EnableRatingConfigurationQuery($resourceId: ID!) {
    getResourceRatingFeedback(resourceId: $resourceId) {
      Configurations {
        enableRatingsOnResource
        enableFeedbackOnResourse
      }
    }
  }
`;

const RatingConfigMutation = graphql`
  mutation EnableRatingConfigurationMutation(
    $resourceId: ID!
    $configurations: ResourceRatingFeedbackConfigurationsInput!
  ) {
    setResourceRatingFeedbackConfiguration(
      resourceId: $resourceId
      configurations: $configurations
    ) {
      Configurations {
        enableRatingsOnResource
        enableFeedbackOnResourse
      }
      resourceId
    }
  }
`;

function EnableRating() {
  const data: any = useLazyLoadQuery(RatingConfig, {
    resourceId: "1",
  });
  console.log(data);

  const [configuration, setConfiguration] = useState(
    data.getResourceRatingFeedback.Configurations
  );

  function HandleToggle(e: any) {
    e.preventDefault();
    let value: boolean = false;
    if (e.target[0].value === "ON") {
      value = true;
    }

    // console.log(value);
    setConfiguration({
      enableRatingsOnResource: value,
      enableFeedbackOnResourse: configuration.enableFeedbackOnResourse,
    });

    commitMutation(environment, {
      mutation: RatingConfigMutation,
      variables: {
        resourceId: "1",
        configurations: {
          enableRatingsOnResource: value,
          enableFeedbackOnResourse: configuration.enableFeedbackOnResourse,
        },
      },
    });
  }

  return (
    <div>
      {configuration.enableRatingsOnResource ? (
        <form onSubmit={HandleToggle}>
          <input type="submit" value="OFF" />
        </form>
      ) : (
        <form onSubmit={HandleToggle}>
          <input type="submit" value="ON" />
        </form>
      )}
    </div>
  );
}

export default EnableRating;
