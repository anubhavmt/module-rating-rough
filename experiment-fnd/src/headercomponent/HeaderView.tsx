import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import PopupRating from "../popupcomponent/PopupRating";
import { globalquery } from "../Query/QueryGlobal";

function HeaderView(props: any) {
  const data: any = useLazyLoadQuery(globalquery, {
    resourceId: "2",
    userId: "1",
  });

  // const [userdata, setUserdata] = useState(data.getUserResourceRatingFeedback);
  let userdata: any = data.getUserResourceRatingFeedback;
  const [popup, setPopup] = useState(0);

  // function HandleUserdata(value: any) {
  //   setUserdata(value);
  // }
  function HandleVisibility(value: number) {
    setPopup(value);
  }

  console.log(data);

  return (
    <div>
      {data.getResourceRatingFeedback.Configurations.enableRatingsOnResource ? (
        <div>
          {userdata.rating > 0 ? (
            <div>
              {userdata.rating}{" "}
              <button onClick={() => setPopup(1)}>Edit</button>
            </div>
          ) : (
            <button onClick={() => setPopup(1)}>Rate module</button>
          )}

          {popup ? (
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
      ) : (
        ""
      )}{" "}
    </div>
  );
}

export default HeaderView;
