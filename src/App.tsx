import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
// import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import miles from "./assets/miles.gif";
import {Button, Row,Container,Col} from 'react-bootstrap'

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript coded by Ian Guy.
            </header>
            
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <hr />
            <ChangeType />
            <hr />
            <StartAttempt />
            <hr />
            <TwoDice />
            {/*
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday> 
            */}
            <h1>Hello World</h1>
            <ul>
                1. React is pretty awesome.
                <br />
                2. I like spiderman a lot.
                <br />
                3. Miles Morales is my favorite character.
                <br />
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img src={miles} alt="Miles" />
            <Container>
                <Row>
                    {" "}
                    <Col>
                        <div
                            style={{
                                width: "25px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "25px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "25px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "25px",
                                height: "50px",
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
