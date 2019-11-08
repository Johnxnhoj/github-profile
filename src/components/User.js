import React from "react"
import I from "../lib/Icon"
export default function(props) {
  return (
    <div className="User-fix">
      <img className="image" src={props.avatar_url} />
      <h1>{props.name}</h1>
      <button className="follow">Follow</button>
      <h3>{props.login}</h3>
      <div className="section1">
        <I icon="map-marker" />

        <div>{props.location}</div>
      </div>
    </div>
  )
}
