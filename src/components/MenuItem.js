
import './../styles/MenuItem.css';

function MenuItem(props) {
  const item = props.item;
  return (
    <div className="item-card">
      <div className='item-name'>
        {item[0]}
      </div>
      {item[1] && <img src={item[1]} className="item-img" />}
      {item[2] &&  <div className="item-description">
        {item[2]}
      </div>}
    </div>
  );
}

export default MenuItem;
