import React from 'react'
import Image from '../Image'
import Content from '../Content'
import Icon from '../Icon'

import organizationicon from '../../assets/icons/organizationicon.png'
import locationnicon from '../../assets/icons/locationicon.png'
import staricon from '../../assets/icons/staricon.png'
import repositoriesicon from '../../assets/icons/repositoriesicon.png'
import followersicon from '../../assets/icons/followersicon.png'

import './styles.css'


const User = props => {
    console.log(props,'tela user')
    return (
        <div className='user'>
            <Image classImage='image' src={props.src} alt={props.alt}/>
            <Content classContent='user-name'>{props.name}</Content>
            <Content classContent='user-bio'>{props.bio}</Content>
            <Icon
            classIcon='icons'
            src={organizationicon}>{props.organization}</Icon>
            <Icon
            classIcon='icons'
            src={locationnicon}>{props.location}</Icon>
            <Icon
            classIcon='icons'
            src={staricon}>{props.star}</Icon>
            <Icon
            classIcon='icons'
            src={repositoriesicon}>{props.repositorie}</Icon>
            <Icon
            classIcon='icons'
            src={followersicon}>{props.followers}</Icon>
        </div>
    )
}

export default User