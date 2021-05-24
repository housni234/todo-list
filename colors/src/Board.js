import React, { useState, useEffect } from 'react';
import './App.css';

function Board() {
    const [colors, setColors] = useState([])
    useEffect(() => {
        fetch("https://reqres.in/api/colors")
            .then((response) => response.json())
            .then((data) => { setColors(data.data) });
    })


    return (
        <div className='container'>
            {colors.map(color =>
                <div onClick={() => {navigator.clipboard.writeText(color.color)} } className="card" key={color.id} style={{ backgroundColor: color.color }}>
                    {color.id}
                    {color.name}
                    {color.year}
                    {color.color}
                    {color.pantone_value}
                </div>)}
        </div>

    )
}

export default Board;