import React from "react";
import styled from "styled-components";
import { CancelButton, SubmitButton1 } from "../../../commons/styles/Button";
// import Button from "./components/Button";
//Button테그는 재사용가능한 컴포넌트로부터 데려온다

//고정값을 가지고 스타일링 함
const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <AppBlock>
      <SubmitButton1>dfhjsd</SubmitButton1>
      <CancelButton>dflksjkfd</CancelButton>
      {/* //   <Button size="small">Button</Button>
    //   <Button size="medium">Button</Button> */}
    </AppBlock>
  );
}

export default App;
