/**
 * @generated SignedSource<<25bdbde4188e8fbd66509f670772a554>>
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
    "kind": "Variable",
    "name": "resourceId",
    "variableName": "resourceId"
  }
],
v2 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EnableRatingConfigurationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ResourceRatingFeedback",
        "kind": "LinkedField",
        "name": "getResourceRatingFeedback",
        "plural": false,
        "selections": [
          (v2/*: any*/)
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
    "name": "EnableRatingConfigurationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ResourceRatingFeedback",
        "kind": "LinkedField",
        "name": "getResourceRatingFeedback",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9ba02e416548a9a805bfce79c6fcb752",
    "id": null,
    "metadata": {},
    "name": "EnableRatingConfigurationQuery",
    "operationKind": "query",
    "text": "query EnableRatingConfigurationQuery(\n  $resourceId: ID!\n) {\n  getResourceRatingFeedback(resourceId: $resourceId) {\n    Configurations {\n      enableRatingsOnResource\n      enableFeedbackOnResourse\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "da31d0cfac31eb6139aa07a6d232fb1b";

export default node;
