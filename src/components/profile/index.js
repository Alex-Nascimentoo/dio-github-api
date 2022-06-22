import React from 'react'
import * as style from './styled'
import useGithub from '../../hooks/githubHooks'

function Profile() {
  const { githubState } = useGithub()

  return (
    <style.Wrapper>
        <style.WrapperImg
          src={githubState.user.avatar} alt="avatar"
          />
        <style.WrapperInfoUser>
          <div>
            <h1>{ githubState.user.name }</h1>
            <style.WrapperUsername>
              <h3>Username: </h3>
              <a
                href={githubState.user.html_url}
                target="_blank"
                rel="noreferrer"
              >
                {githubState.user.login}
              </a>
            </style.WrapperUsername>
            
            <style.WrapperUsername>
              <h3>Company: </h3>
                <span>{githubState.user.company}</span>
            </style.WrapperUsername>
            
            <style.WrapperUsername>
              <h3>Location: </h3>
                <span>{githubState.user.location}</span>
            </style.WrapperUsername>
            
            <style.WrapperUsername>
              <h3>Blog: </h3>
                <a
                  href={githubState.user.blog}
                  target="_blank"
                  rel="noreferrer"
                >{githubState.user.blog}</a>
            </style.WrapperUsername>
          </div>
          <style.WrapperStatusCount>
            <div>
              <h4>Followers</h4>
              <span>{githubState.user.followers}</span>
            </div>
          
            <div>
              <h4>Following</h4>
              <span>{githubState.user.following}</span>
            </div>

            <div>
              <h4>Gists</h4>
              <span>{githubState.user.publicGists}</span>
            </div>
            
            <div>
              <h4>Repos</h4>
              <span>{githubState.user.publicRepos}</span>
            </div>
          </style.WrapperStatusCount>
        </style.WrapperInfoUser>
    </style.Wrapper>
  )
}

export default Profile