import { commitMutation } from "relay-runtime";
import { graphql } from "babel-plugin-relay/macro";
import environment from "../RelayEnvironment";
import "./ComponentIndex.css";
import { useFragment } from "react-relay";

const FeedbackFragment = graphql`
  fragment Feedback_UserFragment on UserResourceRatingFeedback {
    id
    resourceId
    feedback
    updatedAt
  }
`;
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
      id
      resourceId
      feedback
      updatedAt
    }
  }
`;

function Feedback(props: any) {
  let user: any = useFragment(FeedbackFragment, props.user);
  console.log(user);

  function HandleSubmit(e: any) {
    e.preventDefault();

    let here: string = e.target[0].value;

    commitMutation(environment, {
      mutation: FeedbackMutation,
      variables: {
        userId: user.id,
        resourceId: user.resourceId,
        updatetime: user.updatedAt,
        feedback: here,
      },
    });

    props.visibility(0);
  }

  function HandleSmall() {
    props.visibility(0);
  }

  return (
    <div className="feedbackrating">
      <form className="feedbackrating" onSubmit={HandleSubmit}>
        <input type="text" id="feedback" placeholder={user.feedback} />
        <br />
        <input type="submit" value="Save" />
      </form>

      <button onClick={HandleSmall}>Cancel</button>
    </div>
  );
}

export default Feedback;
