import React, { useState } from 'react';
import './../styles/MenuItem.css';

import LevelSelector from './LevelSelector'

function MenuItem(props) {
  const item = props.item;
  var itemToAdd = item;
  const [isClicked, setIsClicked] = useState(false);
  const [modificatons, setModifications] = useState(null);

  return (
    isClicked ? ( //Change to the clicked version of the card, where they can specify sugar, milk, etc.
      <div className="item-card">
        <LevelSelector added="sugar"/>
        <LevelSelector added="creme" />
        <button onClick = {() => {setIsClicked(false); props.addToOrder(itemToAdd);}}>Add to order?</button>
        <button onClick={() => setIsClicked(false)} >Cancel</button>
      </div>
    ) : (
    <div className="item-card" onClick={() => setIsClicked(true)}>
      <div className='item-name'>{item[0]}</div>
      {item[1] && <img src={item[1]} className="item-img" />}
      {item[2] &&  <div className="item-description">
        {item[2]}
      </div>}
    </div>)
  );
}

export default MenuItem;
