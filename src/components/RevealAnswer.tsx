import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    
    function flipVisibility(): void {
        setVisible(!visible);
    }
    <div> The answer is <span data-testid = "question-answer">42</span></div>
    

    return <div>
        <Button onClick = {flipVisibility}>Reveal Answer</Button>
        
        {visible && <div>42</div>}
    </div>;     
   
}

