import React from "react";

function Button(props){
    return(
    <div id={props.id}>
        {props.level}
    </div>
    )
}

export default Button