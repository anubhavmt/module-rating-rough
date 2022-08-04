import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "relay-runtime";
import environment from "../RelayEnvironment";
import "./ComponentIndex.css";

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
      userId
      rating
      feedback
    }
  }
`;

function Ratings(props: any) {
  function HandleSubmit(e: any) {
    e.preventDefault();

    let here: string = e.target[0].value;
    let valu: number = 0;
    if (here != "") {
      valu = parseInt(here);
    }

    commitMutation(environment, {
      mutation: RatingUpdateMutation,
      variables: {
        userId: props.user.userId,
        resourceId: props.user.resourceId,
        updatetime: props.user.updatedAt,
        rating: valu,
      },
    });

    props.onChange({
      userId: props.user.userId,
      resourceId: props.user.resourceId,
      rating: valu,
      feedback: props.user.feedback,
      updatedAt: props.user.updatedAt,
    });
  }

  return (
    <div className="rating">
      <p>{props.user.rating}</p>
      <form className="rating-form" onSubmit={HandleSubmit}>
        <input type="text" id="ratingfrom" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Ratings;
