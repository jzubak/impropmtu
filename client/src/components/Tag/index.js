import React from "react";

function Tag(props){
    return(
    <div id={props.id}>
        {props.tag}
    </div>
    )
}

export default Tag