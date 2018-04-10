import React from 'react';
import './index.css';

export default ({ value,footnote,onRangeChange })=> {
    let className = '';
    if( value>0 ){
        className = 'red';
    }else if(value<0){
        className = 'green';
    }
    return(
        <div>
            <input 
                type="range" 
                orient="vertical" 
                min="-12" max="12" 
                value={value}
                className={className}
                onChange={onRangeChange}
            />
            <p>{footnote}</p>
        </div>
    )
};