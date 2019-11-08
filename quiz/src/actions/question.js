import {
    QUESTIONS, 
    CURRENT_QUESTION, 
    CLEAR_QUESTION, 
    NEXT_QUESTION,
    SET_TIMER,
    SET_INTERVAL,
    SET_OPTIONS,
    GET_RESULT,
    CLEAR_INTERVAL,
    QUIZ_RESULT
} from './types'

import {html, css, javascript} from '../data'

export const getHtmlquiz = () => dispatch =>{
    dispatch({
        type: QUESTIONS,
        payload: {type: html, text: 'HTML'}
    })
}

export const getCssquiz = () => dispatch =>{
    dispatch({
        type: QUESTIONS,
        payload: {type: css, text: 'CSS'}
    })
}

export const getJavascript = () => dispatch =>{
    dispatch({
        type: QUESTIONS,
        payload: {type: javascript, text: 'Javascript'}
    })
}

export const getCurrentquestion = () => dispatch => {
    dispatch({
        type: CURRENT_QUESTION
    })
}

export const nextQuestion = (id,correct, current, checked) => dispatch => {

    if(id === correct-1) {
        let result;
        result = current
        dispatch({
          type: GET_RESULT,
          payload: result
        })
    }
    
    if(id === correct-1) {
        
        dispatch({
            type: QUIZ_RESULT,
            payload: {current: current, result: 'correct', choice: checked }
        })
    } else {
        if(checked !== null) {
            
        dispatch({
                type: QUIZ_RESULT,
                payload: {current: current, result: 'incorrect', choice: checked }
            })
        } else {
            
        dispatch({
                type: QUIZ_RESULT,
                payload: {current: current, result: 'unattempt', choice: checked}
            })
        }
    }
    dispatch({
        type: NEXT_QUESTION
    })
}

export const clearIntervals = (clearinterval) => dispatch => {
    if(clearinterval.length > 0) {
        clearinterval.forEach(item => clearInterval(item))
    }
    dispatch({
        type: CLEAR_INTERVAL
    })
}

export const clearQuestion = () => dispatch =>  {
    dispatch({
       type: CLEAR_QUESTION
    })
}  

export const getTime = (history) => dispatch => {  
    let finalTime = new Date().getTime() + 1000 * 60 * 10 ;
            
            const times = setInterval(() => { 
                let currentTime = new Date().getTime();                   
                let distance = finalTime - currentTime;       
                let minutes = Math.floor((distance)/(1000 * 60));
                let seconds = Math.floor(((distance)%(1000 * 60)/(1000 )));
                if(minutes < 0 ) {
                clearInterval(times);
                history.push('/result')
                }             
                let showTime = `${minutes > 9 ? '' + minutes : '0' + minutes} : ${seconds > 9 ? '' + seconds : '0' + seconds}`                
                    dispatch({
                    type: SET_TIMER,
                    payload: showTime
                })    
                }, 1000);
                if(times !== undefined) {
                  dispatch({
                    type: SET_INTERVAL,
                    payload: times
                })  
                }
            } 

export const setOptions = (id) => dispatch => {
    dispatch({
        type: SET_OPTIONS,
        payload: id
    })
}
