import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {loginUser, clearError} from '../../actions/auth'
import {setAlert} from '../../actions/alert'
import Alert from '../layout/Alert'

const Login = ({loginUser, history, isAuthenticated, clearError, error, setAlert}) => {
    
    useEffect(() => {
        document.title = 'Login'
        if(isAuthenticated) {
            history.push('/')
        }
        if(error === 'Email or Password is incorrect') {
            setAlert(`${error} !`, 'danger');
            clearError();
        }
    }, [document.title, isAuthenticated, error])

    const [user, setUser] = useState({
        
        email: '',
        password: ''
        
    })
    
    const {email, password} = user;
    
    const onchange = (e) => setUser({...user, [e.target.name]: e.target.value})
    
    const onsubmit = e => {
        e.preventDefault();
        loginUser(user, history);
    }
    return (
        <Wrap>
            <div className="login">

        <form onSubmit={onsubmit}>
            <h2>Login Now  <i className="fas fa-sign-in-alt"></i></h2>  
            <input type='email' name="email" value={email} required onChange={onchange} className="inputs" placeholder='Email'/>
            <input type='password' name="password" value={password} required onChange={onchange} className="inputs" placeholder='Password'/>
            <input type="submit" value="Login Now" className="submit"/>
            <div><Alert/></div>
        </form>

            <div className="signUp">
                <Link className="links"><i className="fa fa-key" aria-hidden="true"></i> Forgot Password?</Link>
                <Link className="links" to='/register'><i className="fas fa-user-plus"></i> Sign Up</Link>
            </div>
        </div>
        
        </Wrap>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error
})

export default connect(mapStateToProps, {loginUser, clearError, setAlert})(Login)

const Wrap = styled.div`
height: 84vh;
display: flex;
flex-direction: column;
padding: 4rem 0;
background: orange;
color: white;
.login{
    width: 40vw;
    margin: auto;
    background: #333;
    border-radius: 7px;
    form{
        width: 100%;
        padding: 1.5rem 3rem;
        
        h2{
            text-align: center;
            padding: 1rem 0;
        }
        .inputs{
        display: block;
        width: 100%;
        padding: 0.3rem 0.7rem;
        margin-bottom: 1rem;
        border: none;
        border-radius: 5px;
        overline: none;
       }
       .submit{
           width: 100%;
           padding: 0.5rem 1rem;
           color: white;
           background: rgba(0, 255, 0, 0.6);
           border: none;
           border-radius: 4px;
           transition: all 0.3s ease;
           &:hover{
               background: rgba(0, 255, 0, 0.8)
           }
       }
    }
    .line{
        margin-top: 1rem;
        border: 1px solid #fff; 
    }
    .signUp{
        height: 8vh;
        padding: 0.5rem 3rem;
        border-radius:0 0 5px 5px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        .links{
            text-decoration: none;
            color: black;

        }
    }
}


@media(max-width: 850px) {
    color: black;
    .login{
        width: 60%;
        form{    
        background: orange;
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        }
        .signUp{
           
            background: none;
        }
    }    
}

@media(max-width: 650px) {
    color: black;
    .login{
        width: 80%;
        form{    
        background: orange;
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        }
        .signUp{
           
            background: none;
        }
    }    
}

@media(max-width: 500px) {
    padding: 0;
    height: 86vh;
    .login{
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5rem;
        padding: 0;
        form{
        background: orange;
        width: 100%;
        height: 100%;
        padding: 0;
        .inputs{
            margin-bottom: 1rem;
        }
        .submit{
            background: rgba(0, 0, 220, 0.6);
            &:hover{
                background: rgba(0, 0, 220, 0.8)
            }
        }
    }
    .signUp{
        height: 4vh;
        padding: 0;
        border-radius:0;
        background: none;
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        .links{
            text-decoration: none;
            color: black;
            margin-top: 1rem;
        }
    }
    }
    
}
@media(max-height: 500px) { 
    height: 110vh;
    padding: 1rem 0;
}
`