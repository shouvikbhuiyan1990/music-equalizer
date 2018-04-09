import React from 'react';
import './index.css';

export default ({ value,footnote,onRangeChange })=> (
    <div>
        <select>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
            <option value="jazz">Jazz</option>
            <option value="classical">Classical</option>
        </select>
    </div>
);