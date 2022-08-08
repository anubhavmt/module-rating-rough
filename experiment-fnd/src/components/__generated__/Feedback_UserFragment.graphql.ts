/**
 * @generated SignedSource<<f8894994791b14e6845fca958afebc85>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Feedback_UserFragment$data = {
  readonly feedback: string;
  readonly id: string;
  readonly resourceId: string;
  readonly updatedAt: number;
  readonly " $fragmentType": "Feedback_UserFragment";
};
export type Feedback_UserFragment$key = {
  readonly " $data"?: Feedback_UserFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Feedback_UserFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Feedback_UserFragment",
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
      "name": "feedback",
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

(node as any).hash = "81bbfe9abcb1b0c6e481ed39ddb988d7";

export default node;
