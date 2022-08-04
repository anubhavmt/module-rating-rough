import { useState } from "react";
import Ratings from "../components/Ratings";
import "./index.css";
import SummaryFeedback from "./SummaryFeedback";

function SummaryRating(props: any) {
  function HandleRadio(radiovalue: number) {
    props.onChangeRating(radiovalue);
  }

  return (
    <div>
      <div className="SummaryRating">
        <Ratings onChange={props.onChange} user={props.user} />
        {true ? (
          <SummaryFeedback onChange={props.onChange} user={props.user} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default SummaryRating;
