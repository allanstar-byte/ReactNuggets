import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
    console.log(props);
    return ( <
        div >
        <
        h1 > { props.greeting } < /h1> <h2> {props.subheader} </h
        2 > <
        /div>
    );
}
export default Card;