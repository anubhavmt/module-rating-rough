import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { commitMutation } from "relay-runtime";
import environment from "../RelayEnvironment";
import "./index.css";

const UserdetialFragment = graphql`
  fragment UserDetail_AdminFragment on UserResourceRatingFeedback {
    id
    resourceId
    rating
    feedback
    updatedAt
  }
`;

const UserReviewReset = graphql`
  mutation UserDetailMutation($userId: ID!, $resourceId: ID!) {
    resetUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {
      id
      rating
      feedback
    }
  }
`;

function UserDetail(props: any) {
  let user: any = useFragment(UserdetialFragment, props.user);

  function HandleReset() {
    commitMutation(environment, {
      mutation: UserReviewReset,
      variables: {
        userId: user.id,
        resourceId: user.resourceId,
      },
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
        {user.rating}
        <br />
        {user.feedback === "" ? (
          ""
        ) : (
          <p>
            <h2>Feedback </h2> <br />
            {user.feedback}
          </p>
        )}
      </div>
      <div>
        {user.feedback === "" ? (
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
