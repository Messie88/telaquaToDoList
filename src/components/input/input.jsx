import React from "react";

import './input.scss';

const Input = (props) => {
    return (
        <div className="input">
            <input 
            type="search" 
            placeholder='Search'
            onChange={props.handleChange} />
        </div>
    )
}

export default Input;