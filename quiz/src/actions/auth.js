import {
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    CLEAR_ERRORS,
    GET_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
   } from '../actions/types';

import axios from 'axios';
import authAccess from '../utils/authAccess'

export const loadUser = () => async dispatch => {
if(localStorage.token) {
   authAccess(localStorage.token)
} 

try {
   const res = await axios.get('/api/user/');
   dispatch({
       type: GET_USER,
       payload: res.data.user
   })
} catch (err) {
   dispatch({
       type: AUTH_ERROR,
       payload: err.response.data.message
   })
}
}


export const registerUser = (user, history) => async dispatch => {
   const config = {
       headers: {
           'Content-Type': 'application/json'
        }
   }
   
   try {
       const res = await axios.post('/api/user/register', user, config);
       console.log(res.data)
       dispatch({
           type: REGISTER_SUCCESS,
           payload: res.data
       })
       history.push('/')
       dispatch(loadUser())
       
   } catch (err) {
       dispatch({
           type: REGISTER_FAIL,
           payload: err.response.data.message
       })
   }
}

export const clearError = () => dispatch => {
dispatch({
    type: CLEAR_ERRORS
})
}

export const loginUser = (user) => async dispatch => {
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}
 
try {
    const res = await axios.post('/api/user/login', user, config);
    console.log(res);
    dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    })
    dispatch(loadUser())
} catch (err) {
    dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.message
    })
}
}

export const logout = () => dispatch => {
dispatch({type: LOGOUT});
//dispatch({type: CLEAR_PROFILE})
}

// export const forgotPassword = (email, history, error) => async dispatch =>{
// const config = {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }
// history.push('/recoverPassword')
// try {
    
//     const res = await axios.post('/api/users/forgotPassword',{email}, config)
    
//     dispatch({
//           type: FORGOT_PASSWORD,
//           payload: {email: email, token: res.data.token}
//     })
    
// } catch (err) {
    
//     dispatch({
//         type: FORGOT_PASSWORD_ERROR,
//         payload: err.response.data.message
//     })  
//     setTimeout(() => {
//         dispatch(setAlert('No search results', 'danger'))
//     },200)
     
// }
// }

// export const clearForgotPassword = () => dispatch => {
// dispatch({
//     type: CLEAR_FORGOT_PASSWORD
// })
// }

// export const resetPassword = (token, history, user) => async dispatch => {
// const config = {
//     headers: {'Content-Type': 'application/json'}
// }
// try {
//     const res = await axios.post(`/api/users/resetPassword/${token}`, user, config);
//     dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data
//     })
//     history.push('/dashboard')
// } catch (err) {
//     console.log('hello this is the error of reset Password', err.response.data.message)
//     dispatch({
//         type: LOGIN_FAIL,
//         payload: err.response.data.message
//     })
// }
// }