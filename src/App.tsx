import "./App.css";
import Interface from "./ui/interface";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 20px 48px;
  border: 1px solid black;
  align-self: stretch;
`;

const App = () => {
  return (
    <Div className="App">
      <Interface />
    </Div>
  );
};

export default App;
