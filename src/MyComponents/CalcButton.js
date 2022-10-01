import React from "react";
import CalcButtonNum from "./CalcButtonNum";
import CalcButtonSign from "./CalcButtonSign";

function CalcButton() {
  return (
    <>
      <div className="calcButton">
        <CalcButtonNum />
        <CalcButtonSign />
      </div>
    </>
  );
}

export default CalcButton;
