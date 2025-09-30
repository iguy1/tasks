import React, { useState } from "react";
import {Form} from 'react-bootstrap'

export function ChangeColor(): React.JSX.Element {
    const COLORS = [
        "red","blue","green","orange","purple","cyan","magenta","black","white"
    ]

    const [color, setColor] = useState<string>(COLORS[0]);

    const updateColor = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setColor(event.target.value)
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Label>Select a Color:</Form.Label>


            {COLORS.map((col) => (
                <input
                    key={col}
                    type="radio"
                    name="colors"
                    value={col}
                    checked={color == col}
                    onChange={updateColor}
                ></input>
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: color }}
            >{color}</div>
        </div>
    );
}
