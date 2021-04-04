import './../styles/Menu.css';
import MenuItem from './MenuItem';

function Menu(props) {
    console.log(props.allItems)
    return(
        <div className = 'menu-container'>
            {props.allItems.map((item) =>
                <MenuItem item = {item}/>
            )}
        </div>
    )
}

export default Menu;