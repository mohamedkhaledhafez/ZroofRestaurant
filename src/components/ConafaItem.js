import React, { Component } from "react";
import {FaShoppingCart} from 'react-icons/fa'


const ConafaItem = (props) => {
  const [counter, setCounter] = React.useState(0);

  const price = props.price;
  const handleCountProcess = (price) => {
    setCounter(counter + 1);
    props.setTotalCount(counter * price);
  };

  return (
    <>
      <div className="conafa-container" style={{display: 'grid'}}>
        <div className="img-container">
          <img src={props.src} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h4>{props.name}</h4>
          </div>
          <div className="card-desc">
            <p>{props.desc}</p>
          </div>
          <div className="card-price">
            <span>ريال/الكيلو{props.price}</span>
          </div>
        </div>
        <div className="card-btn">
          <button onClick={handleCountProcess}>
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </>
  );
};

export default ConafaItem;
