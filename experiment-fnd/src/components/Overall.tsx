import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import "./ComponentIndex.css";

const overallFragment = graphql`
  fragment Overall_ResouceFragment on ResourceRatingFeedback {
    id
    averageRating
    totalRatings
  }
`;
function Overall(props: any) {
  const data = useFragment(overallFragment, props.overallData);
  return (
    <div className="overallrating">
      <p>
        &#9733; {data.averageRating}({data.totalRatings})
      </p>
    </div>
  );
}

export default Overall;
