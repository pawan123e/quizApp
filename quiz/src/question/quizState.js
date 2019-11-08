import React, {useReducer} from 'react';
import QuizReducer from './quizReducer';
import QuizContext from './quizContext';
import {html, css, javascript} from '../data'
import {
    QUESTIONS, 
    CURRENT_QUESTION, 
    CLEAR_QUESTION, 
    NEXT_QUESTION,
    SET_TIMER
} from './types'

const QuizState = (props) => {
    const initialState = {
        questions: [],
        current: 0,
        currentQuestion: null,
        length: null,
        loading: false,
        time: null,
        finalTime: null
    }

    const [state, dispatch] = useReducer(QuizReducer, initialState);
    
    const getHtmlquiz = () => {
        dispatch({
            type: QUESTIONS,
            payload: html
        })
    }
    
    const getCurrentquestion = () => {
        dispatch({
            type: CURRENT_QUESTION
        })
    }
    
    const nextQuestion = () => {
        dispatch({
            type: NEXT_QUESTION
        })
    }

    const clearQuestion = () => {
    
        dispatch({
           type: CLEAR_QUESTION
        })
    }  
    
    const getTime = (history, current) => {
        
        let finalTime = new Date().getTime() + 1000 * 60 * 10 ;
            
            const times = setInterval(() => { 
                
                let currentTime = new Date().getTime();    
                
                let distance = finalTime - currentTime;
        
                let minutes = Math.floor((distance)/(1000 * 60));
                let seconds = Math.floor(((distance)%(1000 * 60)/(1000 )));
                console.log(current)
                if(minutes === 0 && seconds === 0) {
                clearInterval(times);
                history.push('/result')
                }
              
                let showTime = `${minutes > 9 ? '' + minutes : '0' + minutes} : ${seconds > 9 ? '' + seconds : '0' + seconds}`
                
                if(current === 10) {
                    console.log('it will be closed')
                    clearInterval(times);
                    dispatch({
                        type: SET_TIMER,
                    payload: {time: null, final: finalTime}
                    })
                } 
                 else {
                    dispatch({
                    type: SET_TIMER,
                    payload: {time: showTime, final: finalTime}
                })
                }
                
                }, 1000);
        }    
    
    return (
        <QuizContext.Provider 
        value ={{
            questions: state.questions,
            currentQuestion: state.currentQuestion,
            current: state.current,
            getHtmlquiz,
            getCurrentquestion,
            nextQuestion,
            clearQuestion,
            getTime,
            length: state.length,
            loading: state.loading,
            time: state.time,
            finalTime: state.finalTime
         
        }}
        >
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState;