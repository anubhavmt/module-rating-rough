/**
 * @generated SignedSource<<9c252b52e042834fbf27ed281e269a61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type FeedbackMutation$variables = {
  feedback?: string | null;
  resourceId: string;
  updatetime: number;
  userId: string;
};
export type FeedbackMutation$data = {
  readonly setUserResourceRatingFeedback: {
    readonly feedback: string;
    readonly id: string;
    readonly resourceId: string;
    readonly updatedAt: number;
  };
};
export type FeedbackMutation = {
  response: FeedbackMutation$data;
  variables: FeedbackMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "feedback"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resourceId"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "updatetime"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "Updatetime",
        "variableName": "updatetime"
      },
      {
        "kind": "Variable",
        "name": "feedback",
        "variableName": "feedback"
      },
      {
        "kind": "Variable",
        "name": "resourceId",
        "variableName": "resourceId"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId"
      }
    ],
    "concreteType": "UserResourceRatingFeedback",
    "kind": "LinkedField",
    "name": "setUserResourceRatingFeedback",
    "plural": false,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FeedbackMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FeedbackMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "3db9b1e0da05a6208a9e88cea2e29930",
    "id": null,
    "metadata": {},
    "name": "FeedbackMutation",
    "operationKind": "mutation",
    "text": "mutation FeedbackMutation(\n  $userId: ID!\n  $resourceId: ID!\n  $updatetime: Int!\n  $feedback: String\n) {\n  setUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId, Updatetime: $updatetime, feedback: $feedback) {\n    id\n    resourceId\n    feedback\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "80a969b8cb0ccad3c62a24a1ec539395";

export default node;
