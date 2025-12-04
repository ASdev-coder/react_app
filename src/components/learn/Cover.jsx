import React, { useState } from 'react';

const Cover = () => {

    const [color, setColor]= useState();

    const resetColor = (color) =>{
        setColor(color);
    }

    return (
        <div>
            <button onClick={() => resetColor("red")}>red</button>
            <button onClick={() => resetColor("green")}>green</button>
            <button onClick={() => resetColor("blue")}>blue</button>
            <h4 style={{color: color}}>Lorem, ipsum dolor.</h4>
        </div>
    );
}

export default Cover;
