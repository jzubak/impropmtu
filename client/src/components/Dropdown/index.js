import React from "react";
import "./style.css"

function Dropdown(props){
    
return(

    <div className="dropdownparent">
    <div className="font"> Show Tags ▼</div>
    <ul className="dropdown font bg-white pl-1 ml-0 pr-5">
        {props.tags.map(item => (
        
            <li key={item}>
                {item}
            </li>
        ))}
    </ul>
    </div>

)}

export default Dropdown;
