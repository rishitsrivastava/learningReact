import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client"

const heading1= createElement("h1",{id:"heading1"}, "from heading1");
const heading2 = createElement("h2",{id:"heading2"}, "from heading2");
const container = createElement("div", {id:"container"},[heading1, heading2])

const root = createRoot(document.getElementById("root"));
root.render(container);