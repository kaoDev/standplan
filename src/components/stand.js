import * as React from "react";
import styled from "react-emotion";


const Element = styled("button")({
    
    fontSize: "20pt",
    textAlign: "center",
    boxSizing: "border-box"

            },
  
    props => ({
        width: 30*props.width,
        height: 30*props.height,
        lineHeight: 30*props.height+"px",
        backgroundColor: props.type === "stand" ? "lightgrey" : "white",
        border: props.type === "stand" ? "1px solid black" : "none",
        color: props.type === "stand" ? "black" : "transparent",
        ":hover":{backgroundColor: props.type === "stand" ? "#33ccb3" : "white"}
    })

);



  

export const Stand = ({standWidth, standHeight, type, standNr, clickFunction}) => (

    <Element onClick={clickFunction} type={type} width={standWidth} height={standHeight} >
        {standNr}
    </Element>
);
