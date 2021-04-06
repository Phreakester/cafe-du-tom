import React, { useState } from 'react';

import './../styles/LevelSelector.css'

function LevelButton(props) {
    return(
        <button className={"level-low" + (props.level === props.value ? " chosen" : "")} onClick={() => props.setLevel(props.value)}>{props.text}</button>
    );
}

function LevelSelector(props) {
    const [level, setLevel] = useState(1); //Level can be 0,1,2
    return(
        <div className="level-selector">
            <LevelButton level={level} value={0} text={"Low " + props.added} setLevel={setLevel} />
            <LevelButton level={level} value={1} text={"Normal " + props.added} setLevel={setLevel} />
            <LevelButton level={level} value={2} text={"Extra " + props.added} setLevel={setLevel}/>
        </div>
    );
}
export default LevelSelector;