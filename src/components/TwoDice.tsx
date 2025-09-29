import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {

    const [rollLeft, setRollLeft] = useState<number>(1)
    const [rollRight, setRollRight] = useState<number>(2);

    function RollR():void{
        setRollRight(
            d6()
        ) 
    }
    function RollL():void{
        setRollLeft(
            d6()
        )
    }

    let message: string | null = "";

     if (rollLeft === 1 && rollRight === 1) {
         message = "Lose";
     }
     else if (rollLeft === rollRight) {
         message = "Win";
     }
    

    return (
        <div>
            <span data-testid = "left-die">{rollLeft}</span>
            <span data-testid = "right-die">{rollRight}</span>

            <Button onClick = {RollL}>Roll Left</Button>
            <Button onClick = {RollR}>Roll Right</Button>
            {message && <div>{message}</div>}

        </div>
    );
}
