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
} from '../actions/types'

const initialState = {
    questions: [],
    quizResult: [],
    current: 0,
    currentQuestion: null,
    length: null,
    loading: false,
    time: null,
    clearInterval: [],
    checkedId: null, 
    result: [],
    type: null
}

export default (state = initialState, action) => {
    switch(action.type) {
         case CLEAR_QUESTION: 
            return {
             ...state,
             questions: [],
             quizResult: [],
             currentQuestion: null,
             current: 0,
             length: null,
             loading: false,
             time: null,
             type: null,
             result: []
         }
         case CLEAR_INTERVAL:
            return {
            ...state,
            clearInterval: [],
            current: 0,
            loading: false,
            time: null
        } 
         case QUESTIONS: 
            return {
                ...state,
                questions: action.payload.type,
                quizResult: action.payload.type,
                type: action.payload.text,
                loading: true,
            }
         case CURRENT_QUESTION: 
            return {
                ...state,
                currentQuestion: state.questions[state.current],
                length: state.questions.length,
                loading: true
            }
         case NEXT_QUESTION:
            return {
                 ...state,
                 current: state.current + 1,
                 checkedId: null    
             }  
         case SET_TIMER: {
            return {
                 ...state,
                 time: action.payload,    
             }
         } 
         case SET_INTERVAL: {
            return {
                 ...state,
                 clearInterval: [...state.clearInterval, action.payload] 
             }
            }
         case SET_OPTIONS: {
            return {
                 ...state,
                 checkedId: action.payload
             }
         }   
         case GET_RESULT: {
            return {
                 ...state,
                 result: [...state.result, action.payload]
             }
         }
         case QUIZ_RESULT: {
            return {
            ...state,
            quizResult: state.quizResult.map((quiz, index)=> index === action.payload.current ? {...quiz, myResult: action.payload.result, myChoice: action.payload.choice} : quiz)
             }
         }            
         default : 
            return state    
     }
}