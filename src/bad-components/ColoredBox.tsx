import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface changeColorProps{
    onClick: () => void;
}
function ChangeColor(newClick:changeColorProps): React.JSX.Element {
    return (
        <Button onClick={newClick.onClick}>
            Next Color
        </Button>
    );
}

interface ColorPreviewProps{
    color:string;
}

function ColorPreview(props: ColorPreviewProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: props.color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const sameColor = COLORS[colorIndex]

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                    onClick={() => {
                        setColorIndex((1 + colorIndex) % COLORS.length);
                    }}
                ></ChangeColor>
                <ColorPreview color = {sameColor}></ColorPreview>
            </div>
        </div>
    );
}
