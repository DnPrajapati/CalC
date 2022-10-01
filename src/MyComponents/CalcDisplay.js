import React, {useContext} from "react";
import {DevilContext} from "./Calculator"

function CalcDisplay() {

const {calcData} = useContext(DevilContext)

  return (
    <>
      <div>
        <div className="calcDisplay calcEquation">{calcData.equation}</div>
        <div className="calcDisplay calcAnswer">{calcData.answer}</div>
      </div>
    </>
  );
}

export default CalcDisplay;
