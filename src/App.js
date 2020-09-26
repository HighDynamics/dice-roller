import React, { useState } from "react";
import "./App.css";

function rollDice(sides) {
  return Math.floor(Math.random() * Math.floor(sides)) + 1;
}
function DFour(props) {
  const [roll, setRoll] = useState(null);
  return (
    <div class="diceItem">
      <div class="roll">{roll}</div>
      <div className="shapeContainer">
        <div className="triangle"></div>
        <button
          className="triangleContent"
          onClick={() => setRoll(rollDice(4))}
        >
          4
        </button>
      </div>
    </div>
  );
}
function DSix(props) {
  const [roll, setRoll] = useState(null);
  return (
    <div className="diceItem">
      <div className="roll">{roll}</div>
      <div className="shapeContainer">
        <div className="square"></div>
        <button className="squareContent" onClick={() => setRoll(rollDice(6))}>
          6
        </button>
      </div>
    </div>
  );
}
function DEight(props) {
  const [roll, setRoll] = useState(null);
  return (
    <div className="diceItem">
      <div className="roll">{roll}</div>
      <div className="shapeContainer">
        <div className="rhomTriTopContainer">
          <div className="rhomTriTop"></div>
        </div>
        <div className="rhomTriBottomContainer">
          <div className="rhomTriBottom"></div>
        </div>
        <button className="rhombusContent" onClick={() => setRoll(rollDice(8))}>
          8
        </button>
      </div>
    </div>
  );
}
function DTen(props) {
  const [roll, setRoll] = useState(null);
  return (
    <div class="diceItem">
      <div class="roll">{roll}</div>
      <div className="shapeContainer">
        <div className="square"></div>
        <button className="squareContent" onClick={() => setRoll(rollDice(10))}>
          10
        </button>
      </div>{" "}
    </div>
  );
}
function DTwelve(props) {
  const [roll, setRoll] = useState(null);
  return (
    <div class="diceItem">
      <div class="roll">{roll}</div>
      <div className="shapeContainer">
        <div className="square"></div>
        <button className="squareContent" onClick={() => setRoll(rollDice(12))}>
          12
        </button>
      </div>{" "}
    </div>
  );
}
function DTwenty(props) {
  const [roll, setRoll] = useState(null);
  return (
    <div className="diceItem">
      <div className="roll">{roll}</div>
      <div className="shapeContainer">
        <div className="hexTriTopContainer">
          <div className="hexTriTop"></div>
        </div>
        <div className="hexRec"></div>
        <div className="hexTriBottomContainer">
          <div className="hexTriBottom"></div>
        </div>
        <button className="hexContent" onClick={() => setRoll(rollDice(20))}>
          20
        </button>
      </div>
    </div>
  );
}
function DOneHundred(props) {
  const [roll, setRoll] = useState(null);
  return (
    <div class="diceItem">
      <div class="roll">{roll}</div>
      <div className="shapeContainer">
        <div className="square"></div>
        <button
          className="squareContent"
          onClick={() => setRoll(rollDice(100))}
        >
          100
        </button>
      </div>
    </div>
  );
}
function Totals(props) {
  return <div id="totals">display</div>;
}
function App() {
  return (
    <>
      <Totals />
      <div id="diceWrapper">
        <DTwenty />
        <DTwelve />
        <DTen />
        <DEight />
        <DSix />
        <DFour />
        <DOneHundred />
      </div>
    </>
  );
}

export default App;
