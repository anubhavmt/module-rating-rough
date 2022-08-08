/**
 * @generated SignedSource<<689167f92d6537992ff19d167ef6952c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type EnableRatingConfigurationQuery$variables = {
  resourceId: string;
};
export type EnableRatingConfigurationQuery$data = {
  readonly getResourceRatingFeedback: {
    readonly Configurations: {
      readonly enableFeedbackOnResourse: boolean;
      readonly enableRatingsOnResource: boolean;
    };
    readonly id: string;
  };
};
export type EnableRatingConfigurationQuery = {
  response: EnableRatingConfigurationQuery$data;
  variables: EnableRatingConfigurationQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "resourceId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "resourceId",
        "variableName": "resourceId"
      }
    ],
    "concreteType": "ResourceRatingFeedback",
    "kind": "LinkedField",
    "name": "getResourceRatingFeedback",
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
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EnableRatingConfigurationQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EnableRatingConfigurationQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a8ee9e7e2d3983c354c05131ba8f40c2",
    "id": null,
    "metadata": {},
    "name": "EnableRatingConfigurationQuery",
    "operationKind": "query",
    "text": "query EnableRatingConfigurationQuery(\n  $resourceId: ID!\n) {\n  getResourceRatingFeedback(resourceId: $resourceId) {\n    id\n    Configurations {\n      enableRatingsOnResource\n      enableFeedbackOnResourse\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "4c2863a8bf1c6bc55a15c461d9a2694f";

export default node;
