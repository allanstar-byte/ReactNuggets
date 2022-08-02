import React from "react";
import ReactDOM from "react-dom";
import APP from "./components/App";

// let element = < button className = "bton" > ClickMe < /button>
// let bton = "Tulia"
// ReactDOM.render( < button > {bton} < /button>, document.getElementById("root"));

// write JSX to create an element that has the following properties:
//   - a <ul> element with an id of about-me
//   - inside the unordered list, three <li> elements with a class of about-me-item that display text about this user
// const user = {
//     name: "Ian",
//     position: "Lead Instructor",
//     hometown: "Suttons Bay, MI",
// };

// const element = ( <
//     ul className = "about-me" >
//     <
//     li className = "about-me-item " > { user.name } < /li>{" "} <
//     li className = "about-me-item " > { user.position } < /li>{" "} <
//     li className = "about-me-item " > { user.hometown } < /li>{" "} <
//     /ul>
// );

ReactDOM.render( < APP name = 'allan Ngoma'
    nickname = 'SyntaxError' / > , document.getElementById('root'));