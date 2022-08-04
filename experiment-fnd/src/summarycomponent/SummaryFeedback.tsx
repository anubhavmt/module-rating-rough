import { useState } from "react";
import Feedback from "../components/Feedback";

import "./index.css";

function SummaryFeedback(props: any) {
  const [feedbackForm, setFeedbackForm] = useState(0);

  function Off() {
    setFeedbackForm(0);
  }

  return (
    <div className="SummaryFeedback">
      {props.user.rating > 0 ? (
        <div>
          {props.user.feedback == "" ? (
            <button onClick={() => setFeedbackForm(1)}>Add </button>
          ) : (
            <div>
              <p>{props.user.feedback}</p>
              <button onClick={() => setFeedbackForm(1)}>Edit</button>
            </div>
          )}
        </div>
      ) : (
        ""
      )}
      {feedbackForm ? (
        <Feedback
          visibility={Off}
          onChange={props.onChange}
          user={props.user}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default SummaryFeedback;
