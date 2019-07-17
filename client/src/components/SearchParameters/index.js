import React from "react";
import {Link} from "react-router-dom"
import Dropdown from "../Dropdown"

function Parameters({from, depart, returnn, budget, tags, level}) {
  console.log("Tags: ", tags)
  return (
    <div className="row font">
      <div className="col-12 col-md-3">
        <div className="fontbold">From </div>
        <div> {from} </div>
      </div>
      <div className="col-12 col-md-3">
        <div className="fontbold">Dates </div>
        <div> {depart} - {returnn}</div>
      </div>
      <div className="col-4 col-md-2">
        <div className="fontbold">Budget </div>
        <div> ${budget}</div>
      </div>
      <div className="col-4 col-md-2">
        <div className="fontbold">Tags </div>
      <Dropdown tags2={tags} />
      </div>
      <div className="col-4 col-md-2">
        <div className="fontbold">Class </div>
        <div> {level}</div>
      </div>
      <div className="col-12 col-md-12 mt-3 mr-4">
        <Link to="/"><div className="font floatright">Update Search</div></Link>
      </div>
    </div>
  )
}

export default Parameters;
