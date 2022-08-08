/**
 * @generated SignedSource<<15831fd39597e14d5bca67d8f9e47c19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Overall_ResouceFragment$data = {
  readonly averageRating: number;
  readonly id: string;
  readonly totalRatings: number;
  readonly " $fragmentType": "Overall_ResouceFragment";
};
export type Overall_ResouceFragment$key = {
  readonly " $data"?: Overall_ResouceFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Overall_ResouceFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Overall_ResouceFragment",
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
      "name": "averageRating",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalRatings",
      "storageKey": null
    }
  ],
  "type": "ResourceRatingFeedback",
  "abstractKey": null
};

(node as any).hash = "3f2ee862903abbee069fc0a0c0fde2a9";

export default node;
