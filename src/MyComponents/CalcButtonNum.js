import React, { useContext } from "react";
import { Col, Row } from "reactstrap";
import { DevilContext } from "./Calculator";

const SignClear = "C";
const SignClearLast = "<";
const SignPlusMinus = "+/-";
const Number = ["1", "2", "3", "4", "5", "6", "7", "8", "9","00", "0"];
const Dot = ".";

function CalcButtonNum() {

const {dispatch} = useContext(DevilContext);

  return (
    <Row xs="3" className="row g-0">
        <Col className="calcButtonNum" onClick={() => dispatch({type:"inputSignClear"})}>{SignClear}</Col>
        <Col className="calcButtonNum" onClick={() => dispatch({type:"inputSignClearLast"})}>{SignClearLast}</Col>
        <Col className="calcButtonNum" onClick={() => dispatch({type:"inputSignPlusMinus"})}>{SignPlusMinus}</Col>
        {Number.map((x) => (
          <Col className="calcButtonNum" key={`Num-${x}`} onClick={() => dispatch({type:"inputNumber", payload: x})}>{x}</Col>
          ))}
          <Col className="calcButtonNum" onClick={() => dispatch({type:"inputDot", payload: Dot})}>{Dot}</Col>
      </Row>
  );
}

export default CalcButtonNum;
