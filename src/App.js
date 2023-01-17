
import './App.css';
import MyButton from "./components/Button";
import Examples from "./components/Examples";

function App() {
  

  return (
    <>  
      <Examples />

      <MyButton text="Botón A" />
      <MyButton text="Otro botón" />
      <MyButton text="soy el último"/> 
    </>  
  );
}


export default App;

