/**
 * @generated SignedSource<<a2d49797fcc9491243c687184289cc87>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ResourceRatingFeedbackConfigurationsInput = {
  enableFeedbackOnResourse: boolean;
  enableRatingsOnResource: boolean;
};
export type EnableRatingConfigurationMutation$variables = {
  configurations: ResourceRatingFeedbackConfigurationsInput;
  resourceId: string;
};
export type EnableRatingConfigurationMutation$data = {
  readonly setResourceRatingFeedbackConfiguration: {
    readonly Configurations: {
      readonly enableFeedbackOnResourse: boolean;
      readonly enableRatingsOnResource: boolean;
    };
    readonly id: string;
  };
};
export type EnableRatingConfigurationMutation = {
  response: EnableRatingConfigurationMutation$data;
  variables: EnableRatingConfigurationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "configurations"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "resourceId"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "configurations",
        "variableName": "configurations"
      },
      {
        "kind": "Variable",
        "name": "resourceId",
        "variableName": "resourceId"
      }
    ],
    "concreteType": "ResourceRatingFeedback",
    "kind": "LinkedField",
    "name": "setResourceRatingFeedbackConfiguration",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "EnableRatingConfigurationMutation",
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
    "name": "EnableRatingConfigurationMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "8fa509f7c75721c6bbc2ef43ea84c52e",
    "id": null,
    "metadata": {},
    "name": "EnableRatingConfigurationMutation",
    "operationKind": "mutation",
    "text": "mutation EnableRatingConfigurationMutation(\n  $resourceId: ID!\n  $configurations: ResourceRatingFeedbackConfigurationsInput!\n) {\n  setResourceRatingFeedbackConfiguration(resourceId: $resourceId, configurations: $configurations) {\n    id\n    Configurations {\n      enableRatingsOnResource\n      enableFeedbackOnResourse\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "20f40b6325e5ee37e54be12ed4b6895d";

export default node;
