import Container from "./components/Container";
import Screen from "./components/MainScreen";
import ButtonBox from './components/BtnBox'
import Button from './components/Btns'
import CalcProvider from "./context/CalcContext";

const btnValues = [
  [7, 8, 9, "/"],
  [4, 5, 6, "x"],
  [1, 2, 3, "-"],
  [".", 0, "+", "C"],
  ["="],
];

function App() {
  return (
    <CalcProvider>
      <Container>
       <Screen /> 
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
              value={btn}
              key={i}
            />
          ))}
        </ButtonBox>
      </Container>
    </CalcProvider>
  );
}

export default App;
