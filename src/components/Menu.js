import './../styles/Menu.css';
import MenuItem from './MenuItem';

function Menu(props) {
    var order = [];

    function addToOrder(itemToAdd) {
        order.push(itemToAdd);
        console.log('Added ' + itemToAdd + ' to the order.');
    }

    return(
        <div className = 'menu-container'>
            <div onClick={() => console.log(order)}>{'heyo ' + order}</div>
            {props.allItems.map((item) =>
                <MenuItem item = {item} addToOrder={addToOrder}/>
            )}
        </div>
    )
}

export default Menu;