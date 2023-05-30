import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {
    id: "child1",
  },
  "Wait, I am checking"
);

const heading2 = React.createElement(
  "h1",
  { id: "child2" },
  "I am learning React From Akshy Saini"
);

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
