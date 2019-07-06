import React from "react";

function Parameters(props){
  return (
    <div>
      <div>From: {props.from}</div>
      <div>Dates: {props.depart}-{props.return}</div>
      <div>Budget: {props.budget}</div>
      <div>Tags: {props.tags}</div>
      <div>Class: {props.level}</div>
    </div>
  )
}

export default Parameters;
