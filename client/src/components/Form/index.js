import React from "react";
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {

  const fontstyle = {
    fontFamily: "din-2014, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#3a878f",
    width: props.width,
    float: props.float,
    borderRadius: props.borderradius,
  }

  return (
    <div className="form-group">
      <input style={fontstyle} className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, borderRadius:"25px", backgroundColor:"#3a878f", borderWidth:"0px"  }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function Date (props) {
  const fontstyle = {
    fontFamily: "din-2014, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    color: "#3a878f"
  }

  return (
    <div className="form-group">
      <input style={fontstyle} className="form-control" type="date" {...props} />
    </div>
  );
}
