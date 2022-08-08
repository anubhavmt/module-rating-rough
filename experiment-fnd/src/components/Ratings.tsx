import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { commitMutation } from "relay-runtime";
import environment from "../RelayEnvironment";
import "./ComponentIndex.css";

const RatingsFragment = graphql`
  fragment Ratings_UserRatings on UserResourceRatingFeedback {
    id
    resourceId
    rating
    updatedAt
  }
`;

const RatingUpdateMutation = graphql`
  mutation RatingsMutation(
    $userId: ID!
    $resourceId: ID!
    $updatetime: Int!
    $rating: Int
  ) {
    setUserResourceRatingFeedback(
      userId: $userId
      resourceId: $resourceId
      Updatetime: $updatetime
      rating: $rating
    ) {
      id
      resourceId
      rating
      updatedAt
    }
  }
`;

function Ratings(props: any) {
  let user: any = useFragment(RatingsFragment, props.user);
  console.log(user);

  function HandleSubmit(e: any) {
    e.preventDefault();

    let here: string = e.target[0].value;
    let valu: number = 0;
    if (here !== "") {
      valu = parseInt(here);
    }

    commitMutation(environment, {
      mutation: RatingUpdateMutation,
      variables: {
        userId: user.id,
        resourceId: user.resourceId,
        updatetime: user.updatedAt,
        rating: valu,
      },
    });
  }

  return (
    <div className="rating">
      <p>{user.rating}</p>
      <form className="rating-form" onSubmit={HandleSubmit}>
        <input type="text" id="ratingfrom" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Ratings;
