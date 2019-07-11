import React from "react";

function BackgroundImage(props){
    var divStyle = {
        backgroundImage: 'url(' + props.src + ')',
        overflow: "hidden",
        position: "fixed",
        top: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0%" ,
        zIndex: -10,
      };

    return(
        <div style={divStyle}></div>
    )
}

export default BackgroundImage