/**
 * @generated SignedSource<<71a99d003c5a3044eae9ff532f270bbe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QueryGlobalQuery$variables = {
  resourceId: string;
  userId: string;
};
export type QueryGlobalQuery$data = {
  readonly getResourceRatingFeedback: {
    readonly Configurations: {
      readonly enableFeedbackOnResourse: boolean;
      readonly enableRatingsOnResource: boolean;
    };
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"Overall_ResouceFragment">;
  };
  readonly getUserResourceRatingFeedback: {
    readonly feedback: string;
    readonly id: string;
    readonly rating: number;
    readonly resourceId: string;
    readonly " $fragmentSpreads": FragmentRefs<"Feedback_UserFragment" | "Ratings_UserRatings">;
  };
};
export type QueryGlobalQuery = {
  response: QueryGlobalQuery$data;
  variables: QueryGlobalQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "resourceId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = {
  "kind": "Variable",
  "name": "resourceId",
  "variableName": "resourceId"
},
v2 = [
  (v1/*: any*/)
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
  "concreteType": "ResourceRatingFeedbackConfigurations",
  "kind": "LinkedField",
  "name": "Configurations",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enableRatingsOnResource",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enableFeedbackOnResourse",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = [
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "resourceId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rating",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "feedback",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryGlobalQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ResourceRatingFeedback",
        "kind": "LinkedField",
        "name": "getResourceRatingFeedback",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Overall_ResouceFragment"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "UserResourceRatingFeedback",
        "kind": "LinkedField",
        "name": "getUserResourceRatingFeedback",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Feedback_UserFragment"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Ratings_UserRatings"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QueryGlobalQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ResourceRatingFeedback",
        "kind": "LinkedField",
        "name": "getResourceRatingFeedback",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
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
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "UserResourceRatingFeedback",
        "kind": "LinkedField",
        "name": "getUserResourceRatingFeedback",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
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
    "cacheID": "b1fe996a3c0408de1254beff4b280bd9",
    "id": null,
    "metadata": {},
    "name": "QueryGlobalQuery",
    "operationKind": "query",
    "text": "query QueryGlobalQuery(\n  $resourceId: ID!\n  $userId: ID!\n) {\n  getResourceRatingFeedback(resourceId: $resourceId) {\n    id\n    Configurations {\n      enableRatingsOnResource\n      enableFeedbackOnResourse\n    }\n    ...Overall_ResouceFragment\n  }\n  getUserResourceRatingFeedback(userId: $userId, resourceId: $resourceId) {\n    id\n    resourceId\n    rating\n    feedback\n    ...Feedback_UserFragment\n    ...Ratings_UserRatings\n  }\n}\n\nfragment Feedback_UserFragment on UserResourceRatingFeedback {\n  id\n  resourceId\n  feedback\n  updatedAt\n}\n\nfragment Overall_ResouceFragment on ResourceRatingFeedback {\n  id\n  averageRating\n  totalRatings\n}\n\nfragment Ratings_UserRatings on UserResourceRatingFeedback {\n  id\n  resourceId\n  rating\n  updatedAt\n}\n"
  }
};
})();

(node as any).hash = "79c22cb6be0549262843c63cbd4916fb";

export default node;
