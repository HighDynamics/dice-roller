import React, { useState } from 'react';
import './App.css';

function rollDice(sides){
  return Math.floor(Math.random() * Math.floor(sides)) + 1
}
function DFour(props){
  const [roll, setRoll] = useState(null);
  return(
    <>
      <button onClick={() => setRoll(rollDice(4))}>d4</button>
      {roll}
    </>
  )
}
function DSix(props){
  const [roll, setRoll] = useState(null);
  return(
    <>
      <button onClick={() => setRoll(rollDice(6))}>d6</button>
      {roll}
    </>
  )
}
function DEight(props){
  const [roll, setRoll] = useState(null);
  return(
    <>
      <button onClick={() => setRoll(rollDice(8))}>d8</button>
      {roll}
    </>
  )
}
function DTen(props){
  const [roll, setRoll] = useState(null);
  return(
    <>
      <button onClick={() => setRoll(rollDice(10))}>d10</button>
      {roll}
    </>
  )
}
function DTwelve(props){
  const [roll, setRoll] = useState(null);
  return(
    <>
      <button onClick={() => setRoll(rollDice(12))}>d12</button>
      {roll}
    </>
  )
}
function DTwenty(props){
  const [roll, setRoll] = useState(null);
  return(
    <>
      <button onClick={() => setRoll(rollDice(20))}>d20</button>
      {roll}
    </>
  )
}
function DOneHundred(props){
  const [roll, setRoll] = useState(null);
  return(
    <>
      <button onClick={() => setRoll(rollDice(100))}>d100</button>
      {roll}
    </>
  )
}
function App(){
  return(
    <div id='diceWrapper'>
      <DTwenty />
      <DTwelve />
      <DTen />
      <DEight />
      <DSix />
      <DFour />
      <DOneHundred />
    </div>
  )
}

export default App;
