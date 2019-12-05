import React from 'react'

const Image = props => {
    return (
        <img className={props.classImage} src={props.src} alt={props.alt} />
    )
}

export default Image