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
  return (
    <div className="main-body">
      <Mastiff />
      <Menu allItems = {itemList} />
      <CompleteOrder />
    </div>
  );
}

export default App;
