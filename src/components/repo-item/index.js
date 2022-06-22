import React from 'react'
import * as style from './styled'

function RepoItem({ name, linkToRepo, fullName }) {
  return (
    <style.Wrapper>
      <h2>{ name }</h2>
      <h4>Full name: </h4>
      <a href={linkToRepo} target="_blank" rel="noreferrer">{ fullName }</a>
    </style.Wrapper>
  )
}

export default RepoItem