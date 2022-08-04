import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "relay-runtime";
import environment from "../RelayEnvironment";
import "./index.css";

const UserReviewReset = graphql`
  mutation UserDetailMutation($userId: ID!, $resourceId: ID!) {
    resetUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {
      userId
      rating
      feedback
    }
  }
`;

function UserDetail(props: any) {
  function HandleReset() {
    commitMutation(environment, {
      mutation: UserReviewReset,
      variables: {
        userId: props.user.userId,
        resourceId: props.user.resourceId,
      },
    });

    props.updateuser({
      userId: props.user.userId,
      resourceId: props.user.resourceId,
      rating: 0,
      feedback: "",
      updatedAt: 0,
    });
  }
  return (
    <div className="userdetail">
      <div>
        <h3>{props.username}</h3>
        <h4>{props.useremail}</h4>
      </div>
      <div className="review">
        <h2>Rating</h2> <br />
        {props.user.rating}
        <br />
        {props.user.feedback === "" ? (
          ""
        ) : (
          <p>
            <h2>Feedback </h2> <br />
            {props.user.feedback}
          </p>
        )}
      </div>
      <div>
        {props.user.feedback === "" ? (
          <button onClick={HandleReset}>Reset Rating</button>
        ) : (
          <button onClick={HandleReset}>Reset Rating & Feedback</button>
        )}
        <button onClick={() => props.visibility()}>Cancel</button>
      </div>
    </div>
  );
}

export default UserDetail;
