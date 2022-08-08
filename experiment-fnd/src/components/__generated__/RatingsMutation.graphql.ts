/**
 * @generated SignedSource<<723462d506ffb2dad6317c2edef8e147>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RatingsMutation$variables = {
  rating?: number | null;
  resourceId: string;
  updatetime: number;
  userId: string;
};
export type RatingsMutation$data = {
  readonly setUserResourceRatingFeedback: {
    readonly id: string;
    readonly rating: number;
    readonly resourceId: string;
    readonly updatedAt: number;
  };
};
export type RatingsMutation = {
  response: RatingsMutation$data;
  variables: RatingsMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rating"
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
        "name": "rating",
        "variableName": "rating"
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
    "name": "RatingsMutation",
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
    "name": "RatingsMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "41afadc816f9124efa4dcb199aaea40a",
    "id": null,
    "metadata": {},
    "name": "RatingsMutation",
    "operationKind": "mutation",
    "text": "mutation RatingsMutation(\n  $userId: ID!\n  $resourceId: ID!\n  $updatetime: Int!\n  $rating: Int\n) {\n  setUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId, Updatetime: $updatetime, rating: $rating) {\n    id\n    resourceId\n    rating\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "bda0e280574a9be715648562caac2e81";

export default node;
