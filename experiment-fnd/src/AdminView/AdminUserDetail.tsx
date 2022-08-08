import { graphql } from "babel-plugin-relay/macro";
import { useState } from "react";
import { useLazyLoadQuery } from "react-relay";
import UserDetail from "./UserDetail";

const AdminView = graphql`
  query AdminUserDetailQuery($userId: ID!, $resourceId: ID!) {
    getUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {
      id
      rating
      feedback
      ...UserDetail_AdminFragment
    }
  }
`;

function AdminUserDetail(props: any) {
  const data: any = useLazyLoadQuery(AdminView, {
    userId: "1",
    resourceId: "2",
  });
  console.log(data);
  console.log("AdminUserDetial");

  const [popup, setPopup] = useState(0);
  // const [userdata, setUserdata] = useState(data.getUserResourceRatingFeedback);
  let userdata: any = data.getUserResourceRatingFeedback;

  function OffVisibility() {
    setPopup(0);
  }

  // function UpdateUser(data: any) {
  // setUserdata(data);
  // }

  return (
    <div>
      {userdata.rating > 0 ? (
        <div>
          {userdata.feedback === "" ? (
            <button onClick={() => setPopup(1)}>Ratingonly</button>
          ) : (
            <button onClick={() => setPopup(1)}>RatingWithFeedback</button>
          )}
          {popup ? (
            <UserDetail
              user={userdata}
              visibility={OffVisibility}
              username={props.username}
              useremail={props.useremail}
            />
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

export default AdminUserDetail;
