import React from "react";
import "./style.css"

function BookButton({link}){

    // function locationchanger () {
    //     window.location.assign = {link}
    //     console.log(window.location.href = {link})
    // }

    return(
    <button className="bookbutton"> 
        <a href={"http://" + link} target="_blank" rel='noreferrer noopener' className="color">
            BOOK
        </a>
    </button>
    )
}

export default BookButton