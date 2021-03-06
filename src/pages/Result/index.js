import React, {Component, Fragment} from 'react'
import Nav from '../../components/Nav'
import User from '../../components/User'
import NotFound from '../../components/NotFound'
import Repo from '../../components/Repo'
import { getUser , getRepos } from '../../service/api/user'

import './styles.css'


class Result extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
            user: {},
            repos: [],
            error: ''
            }
        }
    
    componentDidMount(){   
        if(this.props.location.state){
            if(this.props.location.state.user)  {
                this.setState({
                    user: this.props.location.state.user,
                })
                this.getReposData(this.props.location.state.user.login)
                }  
                if(this.props.location.state.error){
                    this.setState({
                        error: 'Not found'
                })
            }
        }
    }

    handleOnChange = (value) => {
        this.setState({value: value.target.value})
    }

    getUserData = (value) => {
        getUser(value)
        .then(response => {
            this.setState({
                user: response.data,
                error:''
            })   
        })
        .catch((err) => {
            this.setState({
                error: 'Not found'
            })
        })
    }

    getReposData = (value) => {
        getRepos(value).then(response => {
            this.setState({
                repos: response.data
            })
        })
        .catch((err) => {
        })
    }

    handleOnClick = (value) =>{
        this.getUserData(this.state.value);
        this.getReposData(this.state.value);
    }

    render() {
        const user = this.state.user
        const repos = this.state.repos
        const error = this.state.error

        return (
            <div>
                <Nav
                classNav='nav'
                classLogo='logo-result'
                classLogoItalic='logo-italic'
                classSearch='search'
                classInput='input'
                placeholder={this.state.value}
                type='text'
                onChange={this.handleOnChange}
                classButton='button'
                onClick={this.handleOnClick}
                />
                <main className='container'>
                {!error ?
                    <Fragment>
                        <User
                        src={user.avatar_url}
                        alt={user.name}
                        name={user.name}
                        bio={user.bio}
                        organization={user.company}
                        location={user.location}
                        following={user.following}
                        repositorie={user.public_repos}
                        followers={user.followers}
                        />
                        <div>
                            <Repo
                                repos = {repos}
                            />
                        </div>
                    </Fragment>
                :
                 <NotFound classnotfound='notfound'/>
                }
                </main>
            </div>
        )
    }
}

export default Result
