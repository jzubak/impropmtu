import React from "react";
import "./style.css"

function BookButton({link}){
    return(
    <button className="bookbutton">
        <a href={link} target="_blank" rel='noreferrer noopener' className="color">
            BOOK
        </a>
    </button>
    )
}

export default BookButton