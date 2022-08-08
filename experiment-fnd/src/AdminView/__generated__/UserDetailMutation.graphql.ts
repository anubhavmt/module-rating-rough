/**
 * @generated SignedSource<<9e3e04d7eeb8c7cb61c62882bfb9b4d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserDetailMutation$variables = {
  resourceId: string;
  userId: string;
};
export type UserDetailMutation$data = {
  readonly resetUserResourceRatingFeedback: {
    readonly feedback: string;
    readonly id: string;
    readonly rating: number;
  };
};
export type UserDetailMutation = {
  response: UserDetailMutation$data;
  variables: UserDetailMutation$variables;
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
    "alias": null,
    "args": [
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
    "name": "resetUserResourceRatingFeedback",
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
        "name": "rating",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "feedback",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UserDetailMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "UserDetailMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "96bc9f9364c88125894a7017579ed557",
    "id": null,
    "metadata": {},
    "name": "UserDetailMutation",
    "operationKind": "mutation",
    "text": "mutation UserDetailMutation(\n  $userId: ID!\n  $resourceId: ID!\n) {\n  resetUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {\n    id\n    rating\n    feedback\n  }\n}\n"
  }
};
})();

(node as any).hash = "f307ebdc8a87f990e73f20a58f972275";

export default node;
