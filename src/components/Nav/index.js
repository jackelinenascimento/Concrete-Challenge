import React from 'react'
import Logo from '../Logo'
import Search from '../Search'


const Nav = props => {
    return (
        <nav className={props.classNav}>
            <Logo
            classLogo={props.classLogo}
            classLogoItalic={props.classLogoItalic}
            />
            <Search
            classSearch={props.classSearch}
            classInput={props.classInput}
            type={props.type}
            onChange={props.onChange}
            classButton={props.classButton}
            onClick={props.onClick}
             />
        </nav>

    )
}

export default Nav