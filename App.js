import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child" },[
     React.createElement("h1", {}, "This is namaste react"),
     React.createElement("h2", {}, "I am H2 tagd1")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2" },[
     React.createElement("h1", {}, "I am H1 tag"),
     React.createElement("h2", {}, "I am H2 tag")
    ]
  )]
);

const headers = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
