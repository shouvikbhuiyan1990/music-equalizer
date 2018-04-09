import React from 'react';
import './index.css';

export default ({ value,footnote,onRangeChange })=> (
    <div>
        <input 
            type="range" 
            orient="vertical" 
            min="-12" max="12" 
            value={value}
            onChange={onRangeChange}
        />
        <p>{footnote}</p>
    </div>
);