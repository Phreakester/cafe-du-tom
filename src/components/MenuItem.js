import React, { useState } from 'react';
import './../styles/MenuItem.css';

import LevelSelector from './LevelSelector'

function MenuItem(props) {
  const item = props.item;
  var itemToAdd = item[0];
  const [isClicked, setIsClicked] = useState(false);
  const [modificatons, setModifications] = useState({});

  function changeModifications (added, newValue) {
    setModifications(modificatons[added] = newValue); //Modifications is an obj with added:level EX sugar:0
    console.log(added + " : " + newValue )
    console.log(JSON.stringify(modificatons))
  }

  function sendOrder () {
    console.log(JSON.stringify(modificatons))
    props.addToOrder(itemToAdd + modificatons);
    console.log("Sent order to Menu: " + itemToAdd + modificatons);
    console.log("itemtoadd: " + itemToAdd)
    console.log(JSON.stringify(modificatons))
  }

  return (
    isClicked ? ( //Change to the clicked version of the card, where they can specify sugar, milk, etc.
      <div className="item-card">
        <LevelSelector added="sugar" setModifications={changeModifications}/>
        <LevelSelector added="creme" setModifications={changeModifications}/>
        <button onClick = {() => {setIsClicked(false); sendOrder();}}>Add to order?</button>
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
