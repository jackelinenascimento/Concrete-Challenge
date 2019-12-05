import React from 'react'

const Icon = props => {
    return (
        <span className={props.classIcon}><img src={props.src} alt={props.alt} />{props.children}</span>
    )
}

export default Icon