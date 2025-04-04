import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { key: "child1" }, [
    React.createElement("h1", { key: "h1-child1" }, "heading1"),
    React.createElement("h2", { key: "h2-child1" }, "heading2"),
  ]),
  React.createElement("div", { key: "child2" }, [
    React.createElement("h1", { key: "h1-child2" }, "heading3"),
    React.createElement("h2", { key: "h2-child2" }, "heading4"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
