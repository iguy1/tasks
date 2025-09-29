import React, { useState } from "react";
import {Form} from 'react-bootstrap'
export function CheckAnswer({expectedAnswer,}: {expectedAnswer:  string;}): React.JSX.Element {
    const [givenAnswer, setAnswer] = useState<string>("");

    /*
    the CheckAnswer component allows a user to enter an answer to a short answer question, and then displays whether they got it correct or incorrect. The component takes in a parameter representing the expectedAnswer.

You will need a state to handle the user’s given answer
The user’s given answer should initially be the empty string
When the user’s given answer matches the expectedAnswer, display ✔️; otherwise display ❌
    */
    function updateAnswer(event:React.ChangeEvent<HTMLInputElement>){
        setAnswer(event.target.value)
    }

    const checkCorrectness = givenAnswer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group>
                <Form.Label>Check Answers</Form.Label>
                <Form.Control
                    type="text"
                    value={givenAnswer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <div>{checkCorrectness ? "✔️" : "❌"}</div>
        </div>
    );
}
