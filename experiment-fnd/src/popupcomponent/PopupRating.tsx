import Overall from "../components/Overall";
import Ratings from "../components/Ratings";
import Feedback from "../components/Feedback";
import "./index.css";

function PopupRating(props: any) {
  function Off(value: number) {
    props.popupvisibility(value);
  }

  return (
    <div>
      {props.popup ? (
        <div className="popup-rating">
          {props.overallrating ? (
            <Overall overallData={props.resourcedata} />
          ) : (
            <p>no overall</p>
          )}
          {/* configuration.enableRatingsOnResource  */}
          <Ratings onChange={props.onChangeUser} user={props.userdata} />

          {props.userdata.rating > 0 ? (
            <Feedback
              visibility={Off}
              onChange={props.onChangeUser}
              user={props.userdata}
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

export default PopupRating;
