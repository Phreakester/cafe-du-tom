import './../styles/Menu.css';
import MenuItem from './MenuItem';

function Menu(props) {

    return(
        <div className = 'menu-container'>
            {props.allItems.map((item) =>
                <MenuItem item = {item} addToOrder={props.addToOrder}/>
            )}
        </div>
    )
}

export default Menu;