import React, { useState } from 'react';

import Mastiff from './Mastiff';
import Menu from './Menu';
import CompleteOrder from './CompleteOrder';

import cappuchino_img from './../assets/cappuchino.jpg'

const itemList = [
  ["Cappuchino", cappuchino_img, "its a cappuchino"],
  ["Gibraltar", ,"its 3 espresso shots"],
  ["Iced Coffee", ,"The Uncle Tom Special"],
];


function App() {
  const [order, setOrder] = useState([]);

  function addToOrder(itemToAdd) {
    setOrder([...order, itemToAdd])
    console.log('Added ' + itemToAdd + ' to the order.');
  }

  return (
    <div className="main-body">
      <Mastiff />
      <Menu allItems = {itemList} addToOrder = {addToOrder} />
      <CompleteOrder order = {order} />
    </div>
  );
}

export default App;
