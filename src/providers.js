import React from 'react'
import { ResetCss } from './global/resetCss'
import GithubProvider from './providers/githubProvider'
import App from './App'

function providers() {
  return (
    <main>
      <GithubProvider>
        <ResetCss />
        <App />
      </GithubProvider>
    </main>
  )
}

export default providers