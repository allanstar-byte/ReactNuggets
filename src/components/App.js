import React from "react";
import ReactDOM from "react-dom";
import nav from "./NavBar";

let APP = (props) => {
    console.log(props);
    return ( 
        <div > 
            <h1>Hello {props.name} a.k.a {props.nickname}</h1>
        {/* {
            props.children
        }  */}
        </div>

    );
};

export default APP;