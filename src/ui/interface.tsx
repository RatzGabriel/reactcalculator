import React, { ReactElement, useState } from "react";
import ResultRenderer from "./resultRender";

const Interface: React.FC = (): ReactElement => {
  const [saveResult, setSaveResult] = useState<any>("0");
  let last: string | number = saveResult[saveResult.length - 1];

  const onInputSet = (input: string | number) => {
    if (
      last === "+" ||
      last === "-" ||
      last === "*" ||
      last === "/" ||
      last === "%"
    ) {
      if (
        input === "%" ||
        input === "+" ||
        input === "-" ||
        input === "*" ||
        input === "/" ||
        input === "getResult"
      ) {
        return;
      }
    }

    if (input === "AC") {
      setSaveResult("0");
      return;
    }

    if (input === "getResult") {
      setSaveResult(eval(saveResult));
      return;
    } else {
      if (saveResult === "0") {
        setSaveResult(input);
      } else {
        let saveInput = saveResult.toString() + input;
        setSaveResult(saveInput);
      }
    }
  };

  return (
    <div>
      <div>
        <ResultRenderer saveResult={saveResult} />
      </div>
      <div>
        <button onClick={() => onInputSet("AC")}>AC</button>

        <button onClick={() => onInputSet("%")}>%</button>
      </div>
      <div>
        <button onClick={() => onInputSet(7)}>7</button>
        <button onClick={() => onInputSet(8)}>8</button>
        <button onClick={() => onInputSet(9)}>9</button>
        <button onClick={() => onInputSet("+")}>+</button>
      </div>
      <div>
        <button onClick={() => onInputSet(4)}>4</button>
        <button onClick={() => onInputSet(5)}>5</button>
        <button onClick={() => onInputSet(6)}>6</button>
        <button onClick={() => onInputSet("-")}>-</button>
      </div>
      <div>
        <button onClick={() => onInputSet(1)}>1</button>
        <button onClick={() => onInputSet(2)}>2</button>
        <button onClick={() => onInputSet(3)}>3</button>
        <button onClick={() => onInputSet("*")}>*</button>
      </div>
      <div>
        <button onClick={() => onInputSet("0")}>0</button>
        <button onClick={() => onInputSet(".")}>.</button>
        <button onClick={() => onInputSet("/")}>/</button>
        <button onClick={() => onInputSet("getResult")}>=</button>
      </div>
    </div>
  );
};

export default Interface;
