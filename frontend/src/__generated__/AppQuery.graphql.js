/**
 * @flow
 * @relayHash 71b3c5195326787262785c6d5f133af9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +allStudents: ?{|
    +totalCount: ?number,
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +firstName: string,
        +lastName: string,
        +age: number,
        +books: ?{|
          +edges: $ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +subject: {|
                +id: string,
                +name: string,
                +code: string,
              |},
            |}
          |}>
        |},
        +subjects: ?{|
          +edges: $ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: string,
              +code: string,
            |}
          |}>
        |},
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +startCursor: ?string,
      +endCursor: ?string,
    |},
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  allStudents(first: 5) {
    totalCount
    edges {
      node {
        id
        firstName
        lastName
        age
        books {
          edges {
            node {
              id
              subject {
                id
                name
                code
              }
            }
          }
        }
        subjects {
          edges {
            node {
              id
              name
              code
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      startCursor
      endCursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "code",
    "args": null,
    "storageKey": null
  }
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "allStudents",
    "storageKey": "allStudents(first:5)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 5,
        "type": "Int"
      }
    ],
    "concreteType": "StudentNodeConnection",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "totalCount",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "StudentNodeEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "StudentNode",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "firstName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "lastName",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "age",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "books",
                "storageKey": null,
                "args": null,
                "concreteType": "BookNodeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BookNodeEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BookNode",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "subject",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SubjectNode",
                            "plural": false,
                            "selections": (v1/*: any*/)
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "subjects",
                "storageKey": null,
                "args": null,
                "concreteType": "SubjectNodeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SubjectNodeEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SubjectNode",
                        "plural": false,
                        "selections": (v1/*: any*/)
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pageInfo",
        "storageKey": null,
        "args": null,
        "concreteType": "PageInfo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "hasNextPage",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "startCursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "endCursor",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  allStudents(first: 5) {\n    totalCount\n    edges {\n      node {\n        id\n        firstName\n        lastName\n        age\n        books {\n          edges {\n            node {\n              id\n              subject {\n                id\n                name\n                code\n              }\n            }\n          }\n        }\n        subjects {\n          edges {\n            node {\n              id\n              name\n              code\n            }\n          }\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      startCursor\n      endCursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4df95b8bf1d4825d9bddbe2bb2c4b35d';
module.exports = node;
