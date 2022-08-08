import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import environment from "../RelayEnvironment";
import Ratings from "../components/Ratings";
import Overall from "../components/Overall";
import Feedback from "../components/Feedback";
import "./index.css";
import { useState } from "react";
import { globalquery } from "../Query/QueryGlobal";

function SummaryView(props: any) {
  const data: any = useLazyLoadQuery(globalquery, {
    resourceId: "2",
    userId: "1",
  });

  console.log(data);

  let userdata: any = data.getUserResourceRatingFeedback;
  const [feedbackForm, setFeedbackForm] = useState(0);

  const configuration: any = data.getResourceRatingFeedback.Configurations;

  function Off() {
    setFeedbackForm(0);
  }

  return (
    <div className="SummaryBox">
      {props.overallrating && configuration.enableRatingsOnResource ? (
        <Overall overallData={data.getResourceRatingFeedback} />
      ) : (
        ""
      )}

      {configuration.enableRatingsOnResource ? (
        <div className="SummaryRating">
          <Ratings user={userdata} />

          {true ? (
            <div className="SummaryFeedback">
              {userdata.rating > 0 ? (
                <div>
                  {userdata.feedback === "" ? (
                    <button onClick={() => setFeedbackForm(1)}>Add </button>
                  ) : (
                    <div>
                      <p>{userdata.feedback}</p>
                      <button onClick={() => setFeedbackForm(1)}>Edit</button>
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
              {feedbackForm ? (
                <Feedback visibility={Off} user={userdata} />
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SummaryView;
