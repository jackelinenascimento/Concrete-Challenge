import React from 'react'
import Input from '../Input'
import Button from '../Button'

import './styles.css'

const Search = props => {
    return (
        <div className={props.classSearch}>
            <Input 
            classInput='input'
            type={props.type}
            onChange={props.onChange}
            />
            <Button
            classButton='button'
            onClick={props.onClick}
            />
        </div>
    )
}

export default Search