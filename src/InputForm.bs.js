// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.reducerComponent("InputForm");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (self) {
              return React.createElement("div", undefined, self[/* state */1][/* name */0]);
            }),
          /* initialState */(function () {
              return /* record */[
                      /* name */"John Smith",
                      /* title */"Engineer"
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (_, state) {
              return /* Update */Block.__(0, [/* record */[
                          /* name */"Changed",
                          /* title */state[/* title */1]
                        ]]);
            }),
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
