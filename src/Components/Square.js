import React from 'react';
import "../App.css"
function Square({value, choose}) {
    return (
        <div className="square" onClick={choose}>{value}</div>
    )
}

export default Square;