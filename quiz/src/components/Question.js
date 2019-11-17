import React, {useEffect} from 'react'
import Options from './Options'
import styled from 'styled-components'
import Spinner from './Spinner'
import {connect} from 'react-redux'

import {
  getHtmlquiz,
  getCurrentquestion,
  nextQuestion,
  getTime,
  clearQuestion, 
  getCssquiz,
  getJavascript
} from '../actions/question'

const Question = ({
  type,
  history, 
  getHtmlquiz,
  getCssquiz,
  getJavascript, 
  getCurrentquestion, 
  currentQuestion,
  nextQuestion, 
  questions,
  getTime, 
  current, 
  length, 
  loading, 
  time, 
  clearInterval,
  checkedId,
  topic
}) => {
  
  useEffect( () =>{    
  document.title = 'Quiz'
  current === 0 && loading && getTime(history, clearInterval);
  length === 10 && current > length-1 && history.push('/result');
  if(questions.length === 0) {
    if(type === 'CSS') {
    getCssquiz();
  }
  if(type === 'HTML') {
    getHtmlquiz();
  }
  if(type === 'Javascript') {
    getJavascript();
  }
  }
  
  getCurrentquestion();
    
 },[current,loading, topic])

  if(!loading || time === null || current === 10) {
    return  <Spinner/>
  } else {
    const {question, options, correct} = currentQuestion;
    return (
   <Wrapper>
     {console.log(window.innerHeight)}
     <div style={{display: 'flex', justifyContent: 'space-between'}}>
     <h1> {topic} Quiz </h1>
     <h1> {time} </h1>
     </div>
     <br/>
     <h2>Question {current + 1} of {length}</h2><br/>
     {question.split('\n') ? <h3>{question.split('\n')[0]} <br/><br/> {question.split('\n')[1]}</h3> : <h3>{question} <br/></h3>}
      <div className="list">
       {<Options  options={options} />}
      </div>
      <button onClick = {() => nextQuestion(checkedId, correct, current, checkedId)}>Next ></button>
    </Wrapper>
  ); }}

  const mapStateToProps = state => ({
    loading: state.question.loading,
    questions: state.question.questions,
    current: state.question.current,
    currentQuestion: state.question.currentQuestion,
    length: state.question.length,
    time: state.question.time,
    clearInterval: state.question.clearInterval,
    checkedId : state.question.checkedId,
    topic: state.question.type
})

export default connect(mapStateToProps, {getHtmlquiz,
  getCssquiz,
  getCurrentquestion,
  nextQuestion,
  getTime,
  clearQuestion,
  getJavascript
  })(Question)

const Wrapper = styled.div`
  //height: 88vh;
  min-height: 85vh;
  height: 100%;
  width: 80%;
  margin: auto;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background: white;
  h2{
    font-weight: 600;
    font-size: 1.5rem;
  }

  h3{
    font-weight: 500;
    font-size: 1.2rem;
  }

  button{
    font-size: 1.1rem;
    background: rgba(0,128,0,0.7);
    color: white;
    padding: 0.6rem 1.5rem;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover{
      background: rgba(0,128,0,0.8)
    }
  }
  @media(max-width : 1024px) { 
    //height: 90vh;
    height: 100%;
   }
  @media(max-width : 786px) { 
    //height: 95vh;
    height: 100%;
    h1{
        font-size: 1.5rem;     
    }
    h2{
        font-size: 1.2rem;
    }
    h3{
        font-size: 1.1rem;
    }
    button {
      width: 100%;
      margin: auto;
    }
  }
  @media(max-width : 430px) { 
    //height: 120vh;
    height: 100%;
    h2{
      font-size: 1.2rem;
      margin-bottom: -1rem;
  }
  }
  @media(max-height: 500px) { 
    height: 100%;
    padding: 1rem 0;
}
`