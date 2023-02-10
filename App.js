import React, { useState } from 'react'
import "./App.css"
import * as Math from "mathjs"

import Button from './components/Button'
import ClearButton from "./components/ClearButton"
import Input from "./components/Input"

const App=() => {
  const[input ,setInput] = useState("");
  function addToInput(val){
    setInput(input + val);
  }

  function handleEqual(){
    setInput(Math.evaluate(input));
  }

  return (
    <div className="app">
      <div className="calcWrapper">
        <Input input={input} id ="inputstyle"></Input>
        <div className="row">
          <ClearButton handleClear={() => setInput()}>AC</ClearButton>
          <Button handleClick={addToInput}>%</Button>
          <Button handleClick={addToInput}>/</Button> 
        </div>
        <div className="row">
          <Button handleClick={addToInput}>7</Button>
          <Button handleClick={addToInput}>8</Button>
          <Button handleClick={addToInput}>9</Button>
          <Button handleClick={addToInput}>*</Button> 
        </div>
        <div className="row">
          <Button handleClick={addToInput}>4</Button>
          <Button handleClick={addToInput}>5</Button>
          <Button handleClick={addToInput}>6</Button>
          <Button handleClick={addToInput}>-</Button> 
        </div>
        <div className="row">
          <Button handleClick={addToInput}>1</Button>
          <Button handleClick={addToInput}>2</Button>
          <Button handleClick={addToInput}>3</Button>
          <Button handleClick={addToInput}>+</Button> 
        </div>
        <div className="row">
          <Button handleClick={addToInput}>0</Button>
          <Button handleClick={addToInput}>.</Button>
          <Button id ="equalButton" handleClick={handleEqual}>=</Button>
           
        </div>
      </div>
    </div>
  )
}
export default App;























