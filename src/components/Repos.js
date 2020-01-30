import React from "react"
import I from "../lib/Icon"

export default function(props) {
  return (
    <div className="Repo-fix">
      <div className="Nav-Bar">
        <div>Overview</div>
        <div>Repositories</div>
        <div>Projects</div>
        <div>Stars</div>
        <div>Followers</div>
        <div>Following</div>
      </div>
      <div className="find-r">
        <input
          type="text"
          className="find2"
          placeholder="Find a repoitory"
        ></input>
        <button className="ButtonZ">
          <a>Type:</a> <a className="a2">All&#9660;</a>
        </button>
        <button className="ButtonZ">
          <a>language:</a> <a className="a2">All&#9660;</a>
        </button>
        <button className="book">
          <I icon="book" />
          New
        </button>
      </div>
      {props.repos.map((repo, i) => (
        <div className="Each-R" key={"repo" + i}>
          <a className="url-stuff" href={repo.html_url} target="_blank">
            {repo.name}
          </a>
          <p>{repo.language}</p>
        </div>
      ))}
    </div>
  )
}
