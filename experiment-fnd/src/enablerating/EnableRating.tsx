import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useMutation } from "react-relay";
import { commitMutation, useLazyLoadQuery } from "react-relay";
import environment from "../RelayEnvironment";

const RatingConfig = graphql`
  query EnableRatingConfigurationQuery($resourceId: ID!) {
    getResourceRatingFeedback(resourceId: $resourceId) {
      id
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
      id
      Configurations {
        enableRatingsOnResource
        enableFeedbackOnResourse
      }
    }
  }
`;

function EnableRating() {
  const data: any = useLazyLoadQuery(RatingConfig, {
    resourceId: "1",
  });

  console.log(data);

  let configuration: any = data.getResourceRatingFeedback.Configurations;
  const [commit, isInFlight] = useMutation(RatingConfigMutation);

  function HandleToggle(e: any) {
    e.preventDefault();
    let value: boolean = false;
    if (e.target[0].value === "ON") {
      value = true;
    }

    commit({
      variables: {
        resourceId: "1",
        configurations: {
          enableRatingsOnResource: value,
          enableFeedbackOnResourse: configuration.enableFeedbackOnResourse,
        },
      },
      onError(e: any) {
        alert("Please Try again ratings wasn't enabled");
        console.log(e);
      },
      onCompleted(data: any) {
        alert("Rating enabled Successfully Added ");
        console.log(data);
      },
    });
  }
  if (isInFlight) {
    return <div>Loading.....</div>;
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
