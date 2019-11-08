import React from "react"

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
        <button>Type: All&#9660;</button>
        <button>language: All&#9660;</button>
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
