import {
    QUESTIONS, 
    CURRENT_QUESTION, 
    CLEAR_QUESTION,
    NEXT_QUESTION,
    SET_TIMER
} from './types'

export default (state, action) => {
     switch(action.type) {
        case CLEAR_QUESTION: 
        return {
             ...state,
             questions: [],
             currentQuestion: null,
             current: 0,
             length: null,
             loading: false,
             time: null,
             finalTime: undefined
         }
         case QUESTIONS: 
            return {
                ...state,
                questions: action.payload,
                loading: true,
            }
         case CURRENT_QUESTION: 
            return {
                ...state,
                currentQuestion: state.questions[state.current],
                length: state.questions.length
            }
         case NEXT_QUESTION:
            return {
                 ...state,
                 current: state.current + 1
             }  
         case SET_TIMER: {
             return {
                 ...state,
                 time: action.payload.time,
                 finalTime: action.payload.final
             }
         }             
         default : 
            return state    
     }
}