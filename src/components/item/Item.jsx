import React from 'react';
import "./item.css";

import { ButtonChild } from "../button/Button";

export default function Item({ title, price, detail, imgurl }) {
  return (
    <div className="item-card">
        <div className="item-card_header">
            <h2>{title}</h2>
        </div>
        <div className='item-card_img'>
          <img width={400} src={imgurl} alt="imagen" />
        </div>
        <div className='item-card_detail'>
          <h4>$ {price}</h4>
          <p>{detail}</p>
          <ButtonChild>Ver detalle</ButtonChild>
        </div>
    </div>
    
  );
}


