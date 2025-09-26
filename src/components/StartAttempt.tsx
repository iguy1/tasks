import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const[progress, setProgress] = useState<boolean>(false);

    function startQuiz():void{
    if (progress || attempts === 0){
        return;
    }
        setProgress(true);
        setAttempts(attempts=>attempts-1)
        
    }

    function stopQuiz():void{
        setProgress(false);
    }
   
    function specialCase():void{
        if(progress){
            return;
        }
        setAttempts(attempts=>attempts+1)
    }
    
    return (
        <div>
            Current # of attempts: <span>{attempts}</span>
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={specialCase} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
