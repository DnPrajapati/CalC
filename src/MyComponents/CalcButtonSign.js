import React from "react";
import { Col, Row } from "reactstrap";
import { useContext } from "react";
import { DevilContext } from "./Calculator";

const OpDiv = "/";
const OpMul = "x";
const OpSub = "-";
const OpAdd = "+";
const OpEqual = "=";
const Sign = [OpDiv, OpMul, OpSub, OpAdd];

function CalcButtonSign() {
  const { dispatch } = useContext(DevilContext);

  return (
    <Row xs="1" className="row g-0">
      {Sign.map((x) => (
        <Col
          className="calcButtonNum calcButtonSign"
          key={`Op-${x}`}
          onClick={() => {
            dispatch({ type: "OpEqual" });
            dispatch({ type: "Op", payload: x });
          }}
        >
          {x}
        </Col>
      ))}
      <Col
        className="calcButtonNum calcButtonSign"
        onClick={() => dispatch({ type: "OpEqual" })}
      >
        {OpEqual}
      </Col>
    </Row>
  );
}

export default CalcButtonSign;
