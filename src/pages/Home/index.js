import React, {Component} from 'react'
import Logo from '../../components/Logo'
import Search from '../../components/Search'

import {getUser} from '../../service/api/user'
import './styles.css'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            user: {},
            error: ''
            }
        }
    
    handleOnChange = (value) => {
        this.setState({value: value.target.value})
    }

    handleOnClick = () => {
        getUser(this.state.value)
        .then((resp) => {
        this.setState({
            user: resp.data,
            })
            this.props.history.push({
                pathname: '/result', 
                state: {
                    user: this.state.user
                }
            })
            }).catch((err) => {
                this.setState({
                    error: 'User not found'
            })
            this.props.history.push({
                pathname: '/result', 
                state: {
                    error: this.state.error
                }
            })
        })
    }

    render() {
        return (
            <div className='home'>
                <Logo
                classLogo='logo-home'
                classLogoItalic='logo-italic' />
                <Search 
                classSearch='search'
                classInput='input'
                type='text'
                onChange={this.handleOnChange}
                classButton='button'
                onClick={this.handleOnClick}
                />
            </div>
        )
    }
}

export default Home