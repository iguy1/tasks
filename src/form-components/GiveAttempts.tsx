import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");


    const subtract = () => {
        setAttempts(attempts - 1);
    };

    const gain  = () =>{
        const g = parseInt(requests) || 0
        setAttempts(attempts + g)

    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group>
                <Form.Label>Number of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setRequests(event.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <Button onClick={subtract} disabled={attempts === 0}>
                use
            </Button>
            <Button onClick={gain} disabled={requests === ""}>
                gain
            </Button>
            <div> # of {attempts}</div>
        </div>
    );
}
