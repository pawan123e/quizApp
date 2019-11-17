import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {clearQuestion, clearIntervals} from '../actions/question'
const Quiz = ({clearQuestion, clearIntervals, clearinterval}) => {
    
    useEffect(() => {
            document.title = 'Quiz'
            clearQuestion();
            clearIntervals(clearinterval)
    },[document.title])

        return (
            <QuizQuestion>    
                <h1 >Quiz</h1>
                <div className="quizs">
                    <div className="quiz card">
                        <h2>HTML Quiz</h2>
                        <button>
                            <Link to='/html_quiz' className="link">Start Quiz
                            </Link>
                        </button>
                    </div>
                    <div className="quiz card">
                        <h2>CSS Quiz</h2>
                        <button>
                            <Link to='/css_quiz' className="link">Start Quiz
                            </Link>
                        </button>
                    </div>
                    <div className="quiz card">
                        <h2>Javascript Quiz</h2>
                        <button >
                            <Link to='/javascript_quiz' className="link">Start Quiz
                            </Link>
                        </button>
                    </div>
                </div>
            </QuizQuestion>
        )   
}

const mapStateToProps = state => ({
    loading: state.question.loading,
    clearinterval: state.question.clearInterval
})

export default connect(mapStateToProps, {clearQuestion, clearIntervals})(Quiz)

const QuizQuestion = styled.div`
 //background: #f03a77;
background: linear-gradient(to right, red , orange);
color: white;
height: 84vh;
padding: 2rem 0;
h1{
    text-align: center;
    color: black;
    font-size: 4rem;
}
h2{
    text-align: center;
}
.quizs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 80%;
    height: 60vh;
    margin: auto;
    grid-gap: 3rem;
    justify-content: space-around;
    align-items: center;
    .quiz {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 2rem 0;
        border: none;
        background: rgba(200, 200, 200, 0.1);
        box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        color: white;
        button {
            margin-top: 0.5rem;
            padding: 0.4rem 0.9rem;
            color: black;
            border: none;
            background:  none;
            border: 1px solid white;
            transition: all 0.5s ease;
            border-radius: 3px;
            &:hover{
                border: 1px solid black;
                background: black;
                color: white;
            }
        .link {
            text-decoration: none;
            color: white;
        }    
        }
    }
}
    @media(max-width : 786px) {
        height: 100%;
        background: linear-gradient(to right, red , orange);
        .quizs {
            
            height: 100%;
            //margin-top: 2rem;
            //margin-bottom: 1rem;
            display: grid;
            grid-template-columns: 1fr;
            .quiz {
            background: none;
            box-shadow: none;
        } }
`