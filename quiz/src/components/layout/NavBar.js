import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'

const NavBar = ({isAuthenticated, user, logout}) => {
    
    useEffect(() => {

    }, [user])

    const loggedOut = (
        <div className="list">
            <Link to='/register' className="links">Register</Link>
            <Link to='/login' className="links">Login</Link>
        </div>
    )
    
    const loggedIn = (
        <div className="list"> 
            <Link to='' className="links">{user && user.name}</Link>
            <Link to='/login' className="links" onClick = {() => logout()}>Logout</Link>
        </div>
    )


    return (
        <Wrap>
          <h2><Link to='/' className="link">Quiz</Link></h2>
              {isAuthenticated ? loggedIn : loggedOut}
        </Wrap>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps, {logout})(NavBar)
const Wrap = styled.div`
background: #333;
height: 8vh;
padding: 0.4rem 3rem;
color: white;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
.link{
    text-decoration: none;
    color: white;
    &:hover{
        color: gray;
    }
}
.list{
     display: flex;
     flex-direction: row;
     justify-content: space-between;
    .links{
        text-decoration: none;
        color: white;
        padding-left: 2rem;
        &:hover{
            color: gray;
        }
    }
}
@media(max-width: 410px) { 
    padding: 0.4rem 1rem;
    .list {
        .links{
            padding-left: 0.8rem;
    }
}
`