import Axios from "axios"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

//1.actions definitions
const GET_USER = "gh/GET_USER"
const GET_REPOS = "gh/GET_REPOS"
//2.install state
const initialState = {
  user: {},
  repos: []
}

//3.reducer
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    case GET_REPOS:
      return { ...state, repos: action.paylaod }
    default:
      return initialState
  }
}
//4.action creators
function getUser(username) {
  return dispatch => {
    Axios.get(`http://api.github.com/users/${username}`).then(resp => {
      dispatch({
        type: GET_USER,
        payload: resp.data
      })
    })
  }
}
function getRepos(username) {
  return dispatch => {
    Axios.get(`https://api.github.com/users/${username}/repos`).then(resp => {
      dispatch({
        type: GET_REPOS,
        paylaod: resp.data
      })
    })
  }
}
//5.cutom hooks
export function useGithub(username) {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.githubReducer.user)
  const repos = useSelector(appState => appState.githubReducer.repos)
  useEffect(() => {
    dispatch(getUser(username))
    dispatch(getRepos(username))
  }, [])
  return { user, repos }
}
