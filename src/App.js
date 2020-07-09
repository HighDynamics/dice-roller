import React, { useState } from 'react';
import './App.css';

function rollDice(sides){
  return Math.floor(Math.random() * Math.floor(sides)) + 1
}
function DFour(props){
  const [roll, setRoll] = useState(null);
  return(
    <div class='diceItem'>
      <button onClick={() => setRoll(rollDice(4))}>4</button>
      <div class='roll'>{roll}</div>
    </div>
  )
}
function DSix(props){
  const [roll, setRoll] = useState(null);
  return(
    <div class='diceItem'>
      <button onClick={() => setRoll(rollDice(6))}>6</button>
      <div class='roll'>{roll}</div>
    </div>
  )
}
function DEight(props){
  const [roll, setRoll] = useState(null);
  return(
    <div class='diceItem'>
      <button onClick={() => setRoll(rollDice(8))}>8</button>
      <div class='roll'>{roll}</div>
    </div>
  )
}
function DTen(props){
  const [roll, setRoll] = useState(null);
  return(
    <div class='diceItem'>
      <button onClick={() => setRoll(rollDice(10))}>10</button>
      <div class='roll'>{roll}</div>
    </div>
  )
}
function DTwelve(props){
  const [roll, setRoll] = useState(null);
  return(
    <div class='diceItem'>
      <button onClick={() => setRoll(rollDice(12))}>12</button>
      <div class='roll'>{roll}</div>
    </div>
  )
}
function DTwenty(props){
  const [roll, setRoll] = useState(null);
  return(
    <div class='diceItem'>
      <button id='dTwenty' onClick={() => setRoll(rollDice(20))}>20</button>
      <div class='roll'>{roll}</div>
    </div>
  )
}
function DOneHundred(props){
  const [roll, setRoll] = useState(null);
  return(
    <div class='diceItem'>
      <button onClick={() => setRoll(rollDice(100))}>100</button>
      <div class='roll'>{roll}</div>
    </div>
  )
}
function Totals(props){
  return(
    <div id='totals'>
      display
    </div>
  )
}
function App(){
  return(
    <>
      <Totals />
      <div id='diceWrapper'>
        <DTwenty />
        <DTwelve />
        <DTen />
        <DEight />
        <DSix />
        <DFour />
        <DOneHundred />
      </div>
    </>
  )
}

export default App;
