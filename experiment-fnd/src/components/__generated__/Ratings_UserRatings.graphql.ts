/**
 * @generated SignedSource<<f582f47027483dd7fc86dc847dc8e90f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Ratings_UserRatings$data = {
  readonly id: string;
  readonly rating: number;
  readonly resourceId: string;
  readonly updatedAt: number;
  readonly " $fragmentType": "Ratings_UserRatings";
};
export type Ratings_UserRatings$key = {
  readonly " $data"?: Ratings_UserRatings$data;
  readonly " $fragmentSpreads": FragmentRefs<"Ratings_UserRatings">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Ratings_UserRatings",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "resourceId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rating",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "UserResourceRatingFeedback",
  "abstractKey": null
};

(node as any).hash = "654635f422255e94d6704ec834ce8695";

export default node;
