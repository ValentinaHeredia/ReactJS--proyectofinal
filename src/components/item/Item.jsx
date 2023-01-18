import React from 'react'

export default function Item(props) {
  const {title, price, detail, imgurl} = props;
  return (
    <div>
        <div>
            <img width="180" src={imgurl} alt="imagen" />
        </div>
        <h3> {title} </h3>
        <h4> {price} </h4>
        <p> {detail} </p>
    </div>
    
  );
}


