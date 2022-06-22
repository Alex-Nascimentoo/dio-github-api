import React, { createContext, useCallback, useState } from 'react'
import api from '../services/api'

export const GithubContext = createContext({
  loading: false,
  user: {},
  repos: [],
  starred: []
})

function GithubProvider({ children }) {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: undefined,
      avatar: undefined,
      login: undefined,
      name: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      html_url: undefined,
      followers: 0,
      following: 0,
      publicGists: 0,
      publicRepos: 0
    },
    repos: [],
    starred: []
  })

  const getUser = username => {
    setGithubState(prevState => ({
      ...prevState,
      loading: !prevState.loading
    }))

    api.get(`/users/${username}`).then(({data}) => {
      setGithubState(prevState => ({
        ...prevState,
        hasUser: true,
        user: {
          id: data.id,
          avatar: data.avatar_url,
          login: data.login,
          name: data.name,
          blog: data.blog,
          company: data.company,
          location: data.location,
          html_url: data.html_url,
          followers: data.followers,
          following: data.following,
          publicGists: data.public_gists,
          publicRepos: data.public_repos
        },
      }))
    }).finally(() => {
      setGithubState(prevState => ({
        ...prevState,
        loading: !prevState.loading,
      }))
    })
  }

  const getRepos = username => {
    api.get(`/users/${username}/repos`).then(({data}) => {
      setGithubState(prevState => ({
        ...prevState,
        repos: data
      }))
    })
  }
  
  const getStarred = username => {
    api.get(`/users/${username}/starred`).then(({data}) => {
      setGithubState(prevState => ({
        ...prevState,
        starred: data
      }))
    })
  }

  const contextValue = {
    githubState,
    getUser: useCallback(username => getUser(username), []),
    getRepos: useCallback(username => getRepos(username), []),
    getStarred: useCallback(username => getStarred(username), [])
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider