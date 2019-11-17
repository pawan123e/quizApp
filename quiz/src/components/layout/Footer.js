import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Wrap>
        <p>Copyright &copy; 2019 Quiz Inc. All rights reserved.</p>
        </Wrap>
    )
}

export default Footer
const Wrap = styled.div`
background: #333;
//height: 50px;
padding: 0.3rem 3rem;
color: white;
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;
text-align: center;
position: "fixed",
left: "0",
bottom: "0",
 @media(max-width: 450px) { 
        padding: 0.8rem 1rem;
        //height: 70px;
 }
`