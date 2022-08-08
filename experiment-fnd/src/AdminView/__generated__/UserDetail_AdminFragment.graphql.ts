/**
 * @generated SignedSource<<bae5c0622b9c036c84c821d9246ee0e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserDetail_AdminFragment$data = {
  readonly feedback: string;
  readonly id: string;
  readonly rating: number;
  readonly resourceId: string;
  readonly updatedAt: number;
  readonly " $fragmentType": "UserDetail_AdminFragment";
};
export type UserDetail_AdminFragment$key = {
  readonly " $data"?: UserDetail_AdminFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserDetail_AdminFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserDetail_AdminFragment",
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

(node as any).hash = "c3bd39a6bc549628b8cfdaa95ffb5ade";

export default node;
