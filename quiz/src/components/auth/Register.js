import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {registerUser, clearError} from '../../actions/auth'
import {setAlert} from '../../actions/alert'
import Alert from '../layout/Alert'

const Register = ({registerUser, history, setAlert, error, clearError}) => {
    
    useEffect(() => {
        document.title = 'Register'
        if(error === 'User already exist.') {
            setAlert(error, 'danger');
            clearError();
        }
    }, [document.title, error])

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    
    const {name, email, password, confirmPassword} = user;
    
    const onchange = (e) => setUser({...user, [e.target.name]: e.target.value})
    
    const onsubmit = e => {
        e.preventDefault();
        if(password === confirmPassword) {
            registerUser(user, history);
        } else {
            setAlert('Password does not match', 'danger')
        }
        
    }
    return (
        <Wrap>
        
        <form onSubmit={onsubmit}>
        <div><Alert/></div>
            <h2>Register Now</h2>
            <input type='text' name="name" value={name} required onChange={onchange} className="inputs" placeholder='Name'/>
            <input type='email' name="email" value={email} required onChange={onchange} className="inputs" placeholder='Email'/>
            <input type='password' name="password" value={password} required onChange={onchange} className="inputs" placeholder='Password'/>
            <input type='password' name="confirmPassword" value={confirmPassword} required onChange={onchange} className="inputs" placeholder='Confirm Password'/>
            <input type="submit" value="Register Now" className="submit"/>
            
        </form>
        </Wrap>
    )
}

const mapStateToProps = state => ({
    error: state.auth.error
})

export default connect(mapStateToProps, {registerUser, setAlert, clearError})(Register);

const Wrap = styled.div`
height: 84vh;
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem 0;
background: orange;
color: white;
form{
    width: 40%;
    margin: auto;
    background: #333;
    padding: 1.5rem 3rem;
    border-radius: 7px;
    h2{
        text-align: center;
        padding: 1rem 0;
    }
    .inputs{
    display: block;
    width: 100%;
    padding: 0.3rem 0.7rem;
    margin-bottom: 2rem;
    border: none;
    border-radius: 5px;
    overline: none;
   }
   .submit{
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
@media(max-width: 810px) {
    color: black;
    form{
        background: orange;
        width: 60%;
        height: 100%;
        padding: 0.5rem 1rem;
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
}
@media(max-width: 500px) {
    color: black;
    height: 85.5vh;
    form{
        background: orange;
        width: 95%;
        height: 100%;
        padding: 0.5rem 1rem;
        .inputs{
            margin-bottom: 1rem;
        }
        .submit{
            width: 100%;
            background: rgba(0, 0, 220, 0.6);
            &:hover{
                background: rgba(0, 0, 220, 0.8)
            }
        }
    }
}
`