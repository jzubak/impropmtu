import React from "react";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children, maxwidth, padding }) {
  
  var x = {
    maxWidth : maxwidth,
    marginTop: "10px",
    borderWidth: "10px",
    borderColor: "#3a878f",
    borderStyle: "Solid", 
    padding: padding,
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "30px",
    marginBottom: "25px",
  }

  return <div style={x} className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
