import React from 'react'
import Content from '../Content'
import Icon from '../Icon'
import staricon from '../../assets/icons/staricon.png'

import './styles.css'


const Repo = props => {
  
  const { repos } = props

  return (
    repos.map(repo => (
    <div key= {repo.id} className='repo'>
        <Content classContent='repo-name'>{repo.name}</Content>
        <Content classContent='repo-description'>{repo.description}</Content>
        <Icon class='star-count' src={staricon} alt=''>{repo.stargazers_count}</Icon>
    </div>
      )
    )
  )
  }

export default Repo
