
import './App.css';
import MyButton from "./components/button/Button";

import {ButtonChild} from "./components/button/Button";
import FlexWrapper from "./components/flexWrapper/FlexWrapper";
import Item from "./components/item/Item";
import NavBar from "./components/navbar/NavBar";

function App() {
  

  return (
    <>  
      
      <NavBar/>
      <FlexWrapper>
      <MyButton text="Botón A" color="blue" />
      <MyButton text="Otro botón" color="indigo" />
      <MyButton text="soy el último" color="orange"/> 
      <ButtonChild color="green">Ver detalle</ButtonChild>
      </FlexWrapper>
      <hr/>
      <FlexWrapper> 
      <Item 
        title="Lightstick StrayKids" 
        price={15000} 
        detail="Lideres de la 4ta generacion" 
        imgurl ="https://http2.mlstatic.com/D_NQ_NP_712172-MLA43390948416_092020-O.jpg" 
        />
      <Item 
        title="Lightstick Twice"
        price={18000}
        detail="Grupo de la nación"
        imgurl="/assets/img/twice.jpg"
      />
      <Item 
        title="Lightstick Got7"
        price={20000}
        detail="Nose"
        imgurl="/assets/img/got7.jpg"
      />
      </FlexWrapper>
    </> 
  );
}


export default App;

