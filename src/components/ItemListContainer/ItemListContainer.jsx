import React from 'react'
import FlexWrapper from "../flexWrapper/FlexWrapper";
import Item from "../item/Item";

function ItemListContainer() {
    const lightstickTwice = {
        title: "Lightstick Twice",
        price: 18000,
        detail: "Lightstick de Twice segunda versión",
        imgurl: "/assets/img/twice.png",
    };

  return <>
    <FlexWrapper> 
      <Item 
        title="Lightstick StrayKids" 
        price={15000} 
        detail="Lightstick Stray Kids rotatorio y con varios estilos de brillo" 
        imgurl ="/assets/img/straykids.png" 
        />
      <Item 
        title={lightstickTwice.title}
        price={lightstickTwice.price}
        detail={lightstickTwice.detail}
        imgurl={lightstickTwice.imgurl}
      />
      <Item 
        title="Lightstick Got7"
        price={20000}
        detail="Lightstick Got7 luz verde"
        imgurl="/assets/img/got7.png"
      />
      </FlexWrapper>
  </>
}

export default ItemListContainer