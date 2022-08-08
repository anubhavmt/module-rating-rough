/**
 * @generated SignedSource<<0f7b6b242ae2519ee0fcf28a434ab4f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AdminUserDetailQuery$variables = {
  resourceId: string;
  userId: string;
};
export type AdminUserDetailQuery$data = {
  readonly getUserResourceRatingFeedback: {
    readonly feedback: string;
    readonly id: string;
    readonly rating: number;
    readonly " $fragmentSpreads": FragmentRefs<"UserDetail_AdminFragment">;
  };
};
export type AdminUserDetailQuery = {
  response: AdminUserDetailQuery$data;
  variables: AdminUserDetailQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resourceId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "userId"
},
v2 = [
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rating",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "feedback",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AdminUserDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "UserResourceRatingFeedback",
        "kind": "LinkedField",
        "name": "getUserResourceRatingFeedback",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserDetail_AdminFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AdminUserDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "UserResourceRatingFeedback",
        "kind": "LinkedField",
        "name": "getUserResourceRatingFeedback",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
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
            "name": "updatedAt",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e8fd9a83f59402a513128b1852789723",
    "id": null,
    "metadata": {},
    "name": "AdminUserDetailQuery",
    "operationKind": "query",
    "text": "query AdminUserDetailQuery(\n  $userId: ID!\n  $resourceId: ID!\n) {\n  getUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {\n    id\n    rating\n    feedback\n    ...UserDetail_AdminFragment\n  }\n}\n\nfragment UserDetail_AdminFragment on UserResourceRatingFeedback {\n  id\n  resourceId\n  rating\n  feedback\n  updatedAt\n}\n"
  }
};
})();

(node as any).hash = "15e99804f09a0d11df03a4ca71e9b6f2";

export default node;
