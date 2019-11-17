import React from 'react'
import styled from 'styled-components'
import spinner from './Spin.gif'
const Spinner = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'center', height: '84vh'}}>
        <img src={spinner} alt='' className="img-fluid" style={{width: '200px'}}/>
       {/* <div class="container">
           <div class="item-1"></div>
           <div class="item-2"></div>
           <div class="item-3"></div>
           <div class="item-4"></div>
           <div class="item-5"></div>
        </div> */}
       </div>
    )
}

export default Spinner

const Wrap = styled.div`
      $color-4: #eead68;
$color-3: #eec368;
$color-2: #eece68;
$color-1: #eed968;
$color-5: #ee8c68;

$color: $color-1, $color-2, $color-3, $color-4, $color-5;

@mixin anim() {
  @keyframes scale {
    0% {
        transform: scale(1);
    }
    50%,
    75% {
      transform: scale(2.5);
    }
    78%, 100% {
      opacity: 0;
    }
  }
}

body {
  overflow: hidden;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  animation-delay: 1s;
}

@for $i from 1 through 5 {
  .item-#{$i} {
    width: 20px;
    height: 20px;
    background: #f583a1;
    border-radius: 50%;
    @include anim();
    background-color: nth($color, $i);
    margin: 7px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
      content: '';
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: nth($color, $i);
      opacity: 0.7;
      animation: scale 2s infinite cubic-bezier(0, 0, 0.49, 1.02);
      animation-delay: 200ms * $i;
      transition: 0.5s all ease;
      transform: scale(1);
    }
  }
}
`