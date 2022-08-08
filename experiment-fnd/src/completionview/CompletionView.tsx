import { graphql } from "babel-plugin-relay/macro";
import PopupRating from "../popupcomponent/PopupRating";
import { useLazyLoadQuery } from "react-relay";
import { useState } from "react";
import { globalquery } from "../Query/QueryGlobal";

function CompletionView(props: any) {
  const data: any = useLazyLoadQuery(globalquery, {
    resourceId: "2",
    userId: "1",
  });

  let userdata: any = data.getUserResourceRatingFeedback;
  const [popup, setPopup] = useState(1);

  function HandleVisibility(value: number) {
    setPopup(value);
  }

  return (
    <div>
      {popup &&
      data.getResourceRatingFeedback.Configurations.enableRatingsOnResource ? (
        <PopupRating
          overallrating={props.overallrating}
          popup={popup}
          popupvisibility={HandleVisibility}
          userdata={userdata}
          resourcedata={data.getResourceRatingFeedback}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CompletionView;
