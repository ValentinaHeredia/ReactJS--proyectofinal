
import './App.css';
import MyButton from "./components/Button";
import Examples from "./components/Examples";
import {ButtonChild} from "./components/Button";
import FlexWrapper from "./components/flexWrapper/FlexWrapper";

function App() {
  

  return (
    <>  
      <Examples />
      <FlexWrapper>
      <MyButton text="Botón A" color="blue" />
      <MyButton text="Otro botón" color="indigo" />
      <MyButton text="soy el último" color="orange"/> 
      <ButtonChild color="green">Ver detalle</ButtonChild>
      </FlexWrapper>
    </> 
  );
}


export default App;

