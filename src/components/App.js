import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"
import { useGithub } from "../redux/ducks/Github"
import User from "./User"
import Repos from "./Repos"
import I from "../lib/Icon"

function Wrap() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const { user, repos } = useGithub("Johnxnhoj")

  return (
    <>
      <div className="header">
        <div className="header2">
          <I icon="github" />
          <input
            className="search"
            type="text"
            placeholder="Searchor jump to..."
          ></input>
        </div>
        <div className="header3">
          <p>Pull Request</p>
          <p>Issues</p>
          <p>Marketplace</p>
          <p>Explore</p>
        </div>
      </div>
      <div className="whole">
        <div className="container">
          <User {...user} />
          <Repos repos={repos} />
        </div>
      </div>
    </>
  )
}

export default Wrap
