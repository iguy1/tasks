import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface shoveProps{
    position: number;
    setPosition: (newPos: number) => void;
}

function ShoveBoxButton(boxProps:shoveProps):React.JSX.Element {
    return (
        <Button
            onClick={() => {
                boxProps.setPosition(4 + boxProps.position)}}>Shove the Box</Button>
    );
}

interface otherProps{
    position:number
}
function MoveableBox(otherPos: otherProps): React.JSX.Element {
    //const [position, setPosition] = useState<number>(10);
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: otherPos.position + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    const [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
             <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                <MoveableBox position = {position}></MoveableBox>
            </div> 

        </div>
    );
}
