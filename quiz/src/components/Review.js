import React, {useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Review = ({type, result, length, quizResult}) => {

        useEffect(() => {
            document.title = 'Review'
        },[])      

        let your;
        let corr;
        let green;
        let red;
        
        const checkspaces = option => {
          let space = [];
          let wordcount = false;
          if(option.includes(' ')) {
              space = option.split(' ');
              space.forEach(sp => {
                  if(sp.length > 15) {
                    wordcount = true;
                    return true;
                  }
              })
          }
          else if(option.length > 15) {
              wordcount = true;
          }
          return wordcount
      }

        const results = quizResult.map((quiz, index) => {
            return (<div key={index}>
                <h2>Question {index + 1}:</h2>
                <p>{quiz.question}</p>
                <ul >
                {
                quiz.options.map((option, index) =>
                <div key={index}>

                {green =   quiz.myResult !== 'unattempt' && quiz.myChoice === index && quiz.myResult === 'correct'   }
                {red   =   quiz.myResult !== 'unattempt' && quiz.myChoice === index && quiz.myResult === 'incorrect' }
                {your  =   quiz.myResult !== 'unattempt' && quiz.myChoice === index }
                {corr  =   quiz.myResult === 'incorrect'  && index +1 === quiz.correct}
                
                <li className={green ? 'greenItem' : (red ? 'redItem' : (!green ? quiz.correct === index+1 : undefined) ? 'normItem' : 'item') } id='item'>               
                <div className={quiz.myResult !== 'unattempt' && 'left'}>
                {quiz.myResult !== 'unattempt' &&
                <div>
                {green ? <i className="fa fa-check" aria-hidden="true" style={{color: 'green'}}></i> : ''}
                {red ? <i className="fa fa-times" aria-hidden="true" style={{color: 'red'}}></i> : ''}
                </div>}
                <div id={`${checkspaces(option) === true && 'text'}`} className='text'>
                {option}
                </div>
                </div> 
                <span className={index +1 === quiz.correct ? 'right' : quiz.myChoice === index ? 'right' : undefined} >
                { your && 'Your Answer'}{ corr && 'Correct Answer'}{quiz.myResult === 'unattempt' && index+1 === quiz.correct && 'Correct Answer'}
                </span>
                </li>
                </div>
                )}
                </ul>
                <br/>
                <hr/>
            </div>)
        })

        return (
        <Wrapper>
            <h1>{type} Quiz Results </h1>
            <p>Score: {result.length} of {length}</p>
            <h3>{(result.length * 100)/length}% Correct:</h3>
            <hr/>
            {results}
            <br/>
            <Link to='/' className="button">Back to Quizzes</Link>
        </Wrapper>
    )
}
const mapStateToProps = state => ({
    type: state.question.type,
    result: state.question.result,
    length: state.question.length,
    quizResult: state.question.quizResult
  })

export default connect(mapStateToProps, {})(Review)

const Wrapper = styled.div`
  padding: 2rem 0;
  width: 70%;
  margin: auto;
  background: white;
  p {
    font-size: 1.2rem;
  }

  h3{
    font-weight: 400;
    font-size: 1.5rem;
  }

  .list{
    width: 80%;
    height: 100%;
  }

  .button{
    font-size: 1.1rem;
    background: rgba(0, 100, 0, 0.9);
    color: white;
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    &:hover{
      background: rgba(0, 100, 0, 0.8);
    }
  }
  
  .greenItem {   
    background: rgba(0, 100, 0, 0.3);
  }
  
  .redItem {
    background: rgba(100, 0, 0, 0.3);
  }
  
  .normItem {
    background: rgba(153, 153, 153, 0.5);
  }

  .item {
    background: rgba(153, 153, 153, 0.2);
  }

  #item{
    box-sizing: border-box;
    border-bottom: 1px solid white;
    display: grid;
    grid-template-columns: 4fr 1fr;
    justify-content: space-between;
    align-items: start;
    padding: 1rem 1rem;
    display: absolute; 
    font-size: 1.2rem;
    height: 100%;
    width: 100%;
    list-style: none;
    .left{
      display: grid;
      grid-template-columns: 25px 1fr;
      grid-gap: 0.1rem;
      height: 100%;
      .text {
        display:block;
        width:100%;
    }
    }
    .right {
      justify-self: end;
      width: 170px;
      background: rgba(153, 153, 153, 0.5);
      text-align: center;
      padding: 0.2rem 0rem;
      color: white;
      font-size: 1.2rem;
    }   
   }  
   @media(max-width : 786px) {
    width: 90%;
    margin: auto;
    #item{ 
    display: grid;
    grid-template-columns: 1fr 200px;
    justify-content: space-between;
    align-items: start;
    grid-gap: 0.2rem;
    }
    .right {
      justify-self: end;
      width: 170px;
      background: rgba(153, 153, 153, 0.5);
      text-align: center;
      padding: 0.2rem 0rem;
      color: white;
      font-size: 1.2rem;
    } 
   }
   @media(max-width : 460px) {
    width: 90%;
    margin: auto;
    text-align: center;
    #item{ 
    width: 100%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr ;
    justify-content: center;
    text-align: center;
    align-items: center;
    grid-gap: 0.2rem;
    }
    .right {
      justify-self: center;
      width: 170px;
      margin: auto;
      background: rgba(153, 153, 153, 0.5);
      text-align: center;
      padding: 0.2rem 0rem;
      color: white;
      font-size: 1.2rem;
    } 
    .left{
      display: grid;
      grid-template-columns: 25px 1fr;
      grid-gap: 0.1rem;
      height: 100%;
      width: 100%;
    }
    #text {
      display:block;
      width:100%;
      word-break:break-all;
      white-space: normal;
  }
   }
`