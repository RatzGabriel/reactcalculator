import React, { ReactElement, useState } from "react";
import ResultRenderer from "./resultRender";
import styled from "styled-components";

const Div = styled.div``;

const ButtonDiv = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 20px 48px;
  align-self: stretch;
  width: 100%;
`;

const Interface: React.FC = (): ReactElement => {
  const [saveResult, setSaveResult] = useState<any>("0");
  let last: string | number = saveResult[saveResult.length - 1];
  console.log("last", last);

  if (last === "0") {
    last = 0;
  }
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
    console.log("test");

    if (input === "getResult") {
      let result = eval(saveResult);
      setSaveResult(result.toString());
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
    <Div>
      <div>
        <ResultRenderer saveResult={saveResult} />
      </div>
      <ButtonDiv>
        <Button onClick={() => onInputSet("AC")}>AC</Button>

        <Button onClick={() => onInputSet("%")}>%</Button>
      </ButtonDiv>
      <ButtonDiv>
        <Button onClick={() => onInputSet(7)}>7</Button>
        <Button onClick={() => onInputSet(8)}>8</Button>
        <Button onClick={() => onInputSet(9)}>9</Button>
        <Button onClick={() => onInputSet("+")}>+</Button>
      </ButtonDiv>
      <ButtonDiv>
        <Button onClick={() => onInputSet(4)}>4</Button>
        <Button onClick={() => onInputSet(5)}>5</Button>
        <Button onClick={() => onInputSet(6)}>6</Button>
        <Button onClick={() => onInputSet("-")}>-</Button>
      </ButtonDiv>
      <ButtonDiv>
        <Button onClick={() => onInputSet(1)}>1</Button>
        <Button onClick={() => onInputSet(2)}>2</Button>
        <Button onClick={() => onInputSet(3)}>3</Button>
        <Button onClick={() => onInputSet("*")}>*</Button>
      </ButtonDiv>
      <ButtonDiv>
        <Button onClick={() => onInputSet("0")}>0</Button>
        <Button onClick={() => onInputSet(".")}>.</Button>
        <Button onClick={() => onInputSet("/")}>/</Button>
        <Button onClick={() => onInputSet("getResult")}>=</Button>
      </ButtonDiv>
      <button onClick={() => console.log(saveResult)}>Res</button>
    </Div>
  );
};

export default Interface;
