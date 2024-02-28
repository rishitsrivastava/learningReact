import React, { createElement } from "react";
import ReactDOM, { createRoot } from "react-dom/client"

// what does jsx do? 
// JSX -> createElement -> object -> HTML(DOM)

const heading1= createElement("h1",{id:"heading1"}, "from heading1");
// const heading2 = createElement("h2",{id:"heading2"}, "from heading2");
const heading2 = <h1 id="heading2">from heading2</h1>
// both heading1 and heading2 are same, heading2 gets created into heading1 behind the scenes by babel
const container = createElement("div", {id:"container"},[heading1, heading2])


const HeadingComponent = () => {
    return <>
        <h1>hey bro from first functional component</h1>
        <h2>writing two tags in the return statement from functional component</h2>
    </>
}


const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

