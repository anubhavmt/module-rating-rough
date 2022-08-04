import { useLazyLoadQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import environment from "../RelayEnvironment";
import Ratings from "../components/Ratings";
import Overall from "../components/Overall";
import Feedback from "../components/Feedback";
import SummaryRating from "./SummaryRating";
import "./index.css";
import { useState } from "react";
import { globalquery } from "../Query/QueryGlobal";

// const globalquery = graphql`
//   query SummaryViewQuery($resourceId: ID!, $userId: ID!) {
//     getResourceRatingFeedback(resourceId: $resourceId) {
//       resourceId
//       Configurations {
//         enableRatingsOnResource
//         enableFeedbackOnResourse
//       }
//       ...Overall_ResouceFragment
//     }

//     getUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {
//       userId
//       resourceId
//       rating
//       feedback
//       updatedAt
//     }
//   }
// `;

function SummaryView(props: any) {
  const data: any = useLazyLoadQuery(globalquery, {
    resourceId: "2",
    userId: "1",
  });

  const [userdata, setUserdata] = useState(data.getUserResourceRatingFeedback);

  const configuration: any = data.getResourceRatingFeedback.Configurations;

  function HandleUserdata(value: any) {
    setUserdata(value);
  }

  return (
    <div className="SummaryBox">
      {props.overallrating && configuration.enableRatingsOnResource ? (
        <Overall overallData={data.getResourceRatingFeedback} />
      ) : (
        ""
      )}

      {configuration.enableRatingsOnResource ? (
        <SummaryRating user={userdata} onChange={HandleUserdata} />
      ) : (
        ""
      )}
    </div>
  );
}

export default SummaryView;
