import React from 'react'
import {useState} from 'react'

export default function IncDec() {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => setCounter(counter + 1);

  let decrementCounter = () => setCounter(counter - 1);

  function ButtonIncrement(props) {
  
    return (
      <button style={{ marginLeft: '.5rem'} } onClick={props.onClickFunc}>
      +
      </button>
    )
 }

 function ButtonDecrement(props) {
  
    return (
      <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
      -
      </button>
    )
  }

  function Display(props) {
    return (
      <label style={{ marginLeft: '.5rem'}} >{props.message}</label>
    )
  }


  if(counter<=0) {
    decrementCounter = () => setCounter(0);
  }
  return (
    <div className='context'> 
    <ButtonDecrement onClickFunc={decrementCounter}/>
    <Display message={counter}/> 
      <ButtonIncrement onClickFunc={incrementCounter}/>
      
      
    </div>
  );
  }
 
