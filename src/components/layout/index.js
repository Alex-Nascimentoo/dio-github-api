import React from 'react'
import useGithub from '../../hooks/githubHooks'
import Header from '../header'
import * as style from './styled'

function Layout({ children }) {
  const { githubState } = useGithub()

  return (
    <style.WrapperLayout>
      <Header />
        {children}
    </style.WrapperLayout>
  )
}

export default Layout