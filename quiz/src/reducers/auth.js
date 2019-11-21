import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    GET_USER,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GUEST
 } from '../actions/types';

const initialState = {
 token: localStorage.getItem('token'),
 isAuthenticated: null,
 loading: true,
 user: null,
 error: null,
 user: null,
 guest: false
}

export default (state = initialState, action) => {
 switch(action.type) {
     case REGISTER_SUCCESS:
     case LOGIN_SUCCESS:     
        localStorage.setItem('token', action.payload.token)
        return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false,
            error: null
        }
     case GUEST:
         return{
             ...state,
             isAuthenticated: true,
             loading: false,
             error: null,
             guest: true
         }    
     case REGISTER_FAIL:
     case LOGIN_FAIL:
     case AUTH_ERROR: 
     case LOGOUT:   
         localStorage.removeItem('token');
         return {
             ...state,
             token: null,
             isAuthenticated: false,
             loading: true,
             user: null,
             guest: false,
             error:action.payload
         } 
     case CLEAR_ERRORS: 
         return {
             ...state,
             error: null
         }
     case GET_USER: 
          return {
              ...state,
              isAuthenticated: true,
              loading: false,
              user: action.payload
          }        
     default :
        return state;   
 }
}