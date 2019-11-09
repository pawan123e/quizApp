import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {clearIntervals} from '../actions/question'
const Result = ({result, topic, length, clearIntervals, clearinterval}) => {
   
    useEffect(() => {
      // eslint-disable-next-line 
      document.title = 'Result'
      clearIntervals(clearinterval)
    },[clearIntervals])

    const percent = (result.length * 100)/length;
    
    const remarks = () => {
      if(percent >= 80) {
        return 'Outstanding wonderful job!'
      } else if(percent >= 60) {
        return 'Good job!'
      } else if(percent >= 40) {
        return 'Average job!'
      } else if(percent >= 20) {
        return 'Poor job!'
      } else {
        return 'You must study much harder!'
      }
    }

    return (
        <Res>
          <h1>{topic} Quiz</h1>
          <div className="results">
              <h1>Result:</h1>
              <p>{result.length} of {length}</p>
              <h6>{percent}%</h6>
              <p>{remarks()}</p>
              <div className="buttons">
              <Link to='/' className="button">Back to Quizzes</Link>
              <Link to='/review' className="button1">Review Answers</Link>
              </div>
          </div>  
        </Res>
    )
}

const mapStateToProps = state => ({
  result: state.question.result,
  topic: state.question.type,
  length: state.question.length,
  clearinterval: state.question.clearInterval
})

export default connect(mapStateToProps, {clearIntervals})(Result)

const Res = styled.div`
width: 100%;
margin: auto;
padding: 3rem 0;
height: 84vh;
background: orange;
h1 {
  text-align: center;
}
.results{
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin: 4rem 0;
}
.buttons {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.3rem;
  font-size: 1.3rem;
  .button {
          text-align:center;
          padding: 1rem 1.5rem;
          background: rgba(0,100,0,0.7);
          color: white;
          text-decoration: none;
          trasition: all 0.3s ease;
          &:hover{
            background: rgba(0,100,0,0.8)
          }
      }
.button1 {
          text-align:center;
          padding: 1rem 1.5rem;
          background: rgba(0,0,100,0.7);
          color: white;
          text-decoration: none;
          &:hover{
            background: rgba(0,0,100,0.8)
          }
      }   
}

@media(max-height: 500px)  { 
  height: 120vh;
}

@media(max-width: 400px) {
    
    .results{
      margin: 0.8rem 0;
      .buttons {
      display: flex;
      flex-direction: column;
      font-size: 1.1rem;
      .button, .button1 {
        padding: 0.5rem 0.9rem;
        margin-bottom: 1rem;
    }
   }
}
@media(max-height: 500px) and @media(max-width: 1024px) { 
  height: 120vh;
}
`