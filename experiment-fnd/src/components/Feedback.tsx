import { commitMutation } from "relay-runtime";
import { graphql } from "babel-plugin-relay/macro";
import environment from "../RelayEnvironment";
import "./ComponentIndex.css";

// const FeedbackFragment = graphql`
//   fragment Feedback_UserFragment on UserResourceRatingFeedback {
//     userId
//     feedback
//     updatedAt
//   }
// `;
const FeedbackMutation = graphql`
  mutation FeedbackMutation(
    $userId: ID!
    $resourceId: ID!
    $updatetime: Int!
    $feedback: String
  ) {
    setUserResourceRatingFeedback(
      userId: $userId
      resourceId: $resourceId
      Updatetime: $updatetime
      feedback: $feedback
    ) {
      userId
      rating
      feedback
    }
  }
`;

function Feedback(props: any) {
  function HandleSubmit(e: any) {
    e.preventDefault();

    let here: string = e.target[0].value;

    commitMutation(environment, {
      mutation: FeedbackMutation,
      variables: {
        userId: props.user.userId,
        resourceId: props.user.resourceId,
        updatetime: props.user.updatedAt,
        feedback: here,
      },
    });

    props.onChange({
      userId: props.user.userId,
      resourceId: props.user.resourceId,
      rating: props.user.rating,
      feedback: here,
      updatedAt: props.user.updatedAt,
    });

    props.visibility(0);
  }

  function HandleSmall() {
    props.visibility(0);
  }

  return (
    <div className="feedbackrating">
      <form className="feedbackrating" onSubmit={HandleSubmit}>
        <input type="text" id="feedback" placeholder={props.user.feedback} />
        <br />
        <input type="submit" value="Save" />
      </form>

      <button onClick={HandleSmall}>Cancel</button>
    </div>
  );
}

export default Feedback;
