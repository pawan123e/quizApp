import {combineReducers} from 'redux';
import question from './question';
import auth from './auth'
import alert from './alert'

export default combineReducers({
    question,
    auth,
    alert
});