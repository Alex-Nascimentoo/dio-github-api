import React, { useState } from 'react'
import useGithub from '../../hooks/githubHooks'
import * as style from './styled'

function Header() {
  const { getUser } = useGithub()
  const [username, setUsername] = useState()

  const submitGetUser = () => {
    if(!username) return

    return getUser(username)
  }

  return (
    <header>
      <style.Wrapper>
        <input
          type="text"
          placeholder="Type the username"
          onChange={e => setUsername(e.target.value)}
        />

        <button type="submit" onClick={submitGetUser}>Search</button>
      </style.Wrapper>
    </header>
  )
}

export default Header