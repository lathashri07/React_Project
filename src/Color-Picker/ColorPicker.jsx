
import React, { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    const ToggleColor = (event) => {
        setColor(event.target.value);
    }
    return (
        <div className="container">
            <h1>Color Picker Component</h1>
            <div className="color-box" style={{backgroundColor: color}}>
            <p>Selected Color: {color} </p>
            </div>

            <label>Pick a Color : </label>
            <input type="color" className="color-input" value={color} onChange={ToggleColor} />            
        </div>
    )
}
export default ColorPicker;