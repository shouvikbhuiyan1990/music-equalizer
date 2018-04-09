import React from 'react';
import './index.css';

export default ({ isOpen,onSelect })=> (
    <div className="drop-down-btn" onClick={(e)=> onSelect(e,isOpen)}>
        <button type="button" className="btn" value="default">Preset<i className={"arrow "+ (isOpen ? "up" : "down")}></i></button>
        <div className={"btn-group "+ (isOpen? 'display' : 'no-display' )}>
            <button className="btn" value="rock" >Rock</button>
            <button className="btn" value="pop" >pop</button>
            <button className="btn" value="jazz" >Jazz</button>
            <button className="btn" value="classical" >Classical</button>
        </div>
    </div>
);