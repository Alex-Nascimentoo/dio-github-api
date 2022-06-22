import React, { useEffect, useState } from 'react'
import RepoItem from '../repo-item'
import * as style from './styled'
import useGithub from '../../hooks/githubHooks'

function Repos() {
  const { githubState, getRepos, getStarred } = useGithub()
  const [hasUser, setHasUser] = useState(false)

  useEffect(() => {
    if(githubState.user.login) {
      getRepos(githubState.user.login)
      getStarred(githubState.user.login)
    }

    setHasUser(githubState.repos)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login])

  return (
    <> {hasUser ? (
    <style.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <style.WrapperTabList>
        <style.WrapperTab>Repositories</style.WrapperTab>
        <style.WrapperTab>Starred</style.WrapperTab>
      </style.WrapperTabList>

      <style.WrapperTabPanel>
        <style.WrapperList>
          {
            githubState.repos.map(item => (
              <RepoItem
                key={item.id}
                name={item.name}
                linkToRepo={item.html_url}
                fullName={item.full_name}
              />
            ))
          }
        </style.WrapperList>
      </style.WrapperTabPanel>

      <style.WrapperTabPanel>
        <style.WrapperList>
          {
            githubState.starred.map(item => (
              <RepoItem
                key={item.id}
                name={item.name}
                linkToRepo={item.html_url}
                fullName={item.full_name}
              />
            ))
          }
        </style.WrapperList>
      </style.WrapperTabPanel>
    </style.WrapperTabs>
    ) : (
      <></>
    )}
    </>
  )
}

export default Repos