import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {setOptions } from '../actions/question'
const Options = ({options, setOptions, checkedId}) => {
    
    
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

    const option = options.map(
    (option, index) => 
    
    <div 
    className={`${checkedId === index ? 'checkedColor': 'defaultColor'} item`}
    id={index} 
    key = {index} 
    onClick = {() => setOptions(index)}
    value={option}>
    <div className="left">
        
    </div>
    <div id={`${checkspaces(option) === true && 'text'}`} className='text'>
    {option}    
    </div>  

    </div>
    )

    return ( <SmallWrapper > {option} </SmallWrapper> )
}

const mapStateToProps = state => ({
    
    checkedId: state.question.checkedId
})

export default connect(mapStateToProps, {setOptions})(Options);

const SmallWrapper = styled.div`
 cursor: pointer;
 width: 100%;
 padding-bottom: 0.5rem;
 .defaultColor{
     background: rgba(153, 153, 153, 0.2);
     display: grid;
     grid-template-columns: 40px 1fr;
     justify-content: center;
     align-items: center;
     &:hover{
        background: rgba(153, 153, 153, 0.5)
       }
    .left{
        background: white;
        height: 20px;
        width: 20px;
        border-radius: 50%;
    }  
    .text {
        display:block;
        width:100%;
    }
 }
 .checkedColor{
     display: grid;
     grid-template-columns: 40px 1fr;
     justify-content: center;
     align-items: center;
     background: rgba(153, 153, 153, 0.9);
     .left{
        background: rgb(0, 100, 100);
        height: 20px;
        width: 20px;
        border-radius: 50%;
    }
 }
 .item{
     border-bottom: 1px solid white;
     padding: 1rem 1rem;
     display: absolute; 
     font-size: 1.2rem;
     height: 100%;
     width: 100%;
    }  
@media(max-width: 485px) {
    #text {
        display:block;
        width:100%;
        word-break:break-all;
        white-space: normal;
    }
}      
`
