import React, { createContext } from "react";
import { useReducer } from "react";
import CalcButton from "./CalcButton";
import CalcDisplay from "./CalcDisplay";

export const DevilContext = createContext();

const initialState = {
  equation: "",
  answer: "",
  lastAnswer: "",
  lastInput: "",
  lastOp: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "inputNumber":
      return { ...state, answer: state.answer + action.payload };
    case "inputDot":
      if (state.lastInput === ".") {
        return state;
      } else {
        return {
          ...state,
          answer: state.answer + action.payload,
          lastInput: ".",
        };
      }
    case "inputSignClear":
      return initialState;
    case "inputSignPlusMinus":
      if (state.answer === "") {
        return state;
      } else {
        return { ...state, answer: -1 * parseFloat(state.answer).toString() };
      }
    case "inputSignClearLast":
      return { ...state, answer: state.answer.slice(0, -1) };
    case "Op":
      if (state.lastInput === action.type || state.answer === "") {
        return state;
      } else {
        return {
          ...state,
          lastOp: action.payload,
          lastInput: action.payload,
          equation: state.answer + ` ${action.payload} `,
          lastAnswer: state.answer,
          answer: "",
        };
      }
    case "OpEqual":
      debugger;
      if (
        state.lastInput === action.type ||
        state.answer === "" ||
        state.lastAnswer === ""
      ) {
        return state;
      } else {
        return {
          ...state,
          equation: state.equation + state.answer,
          answer: OpWithTwo(parseFloat(state.lastAnswer),parseFloat(state.answer),state.lastOp).toString(),
          lastInput: action.type,
          lastOp: "",
        };
      }
    default:
      return state;
  }
};
const OpWithTwo = (x, y, Sign) => {
  switch (Sign) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "x":
      return x * y;
    case "/":
      return x / y;
  }
};

function Calculator() {
  const [calcData, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="card calculator mx-auto">
      <h5 className="calcTitle">Calculator</h5>
      <DevilContext.Provider value={{ calcData, dispatch }}>
        <CalcDisplay />
        <CalcButton />
      </DevilContext.Provider>
    </div>
  );
}

export default Calculator;
