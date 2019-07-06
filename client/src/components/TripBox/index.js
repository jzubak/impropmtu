import React from "react";

function Tag(props){
    return(
        <div>
            <div>
                {props.destination}
            </div>
            <div>
                <img alt="destination" src="{props.img}" />
            </div>
            <div>
                Flight Details: {props.flight}
            </div>
            <div>
                Flight Price: {props.flightPrice}
            </div>
            <div>
                Hotel Price: {props.hotelPrice}
            </div>
            <div>
                Total: {props.totalPrice}
            </div>
        </div>
    )
}

export default Tag