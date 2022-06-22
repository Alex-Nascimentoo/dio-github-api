import { useContext } from "react";
import { GithubContext } from "../providers/githubProvider";

function useGithub() {
  const { githubState, getUser, getRepos, getStarred } = useContext(GithubContext)

  return (
    {githubState, getUser, getRepos, getStarred }
  )
}

export default useGithub