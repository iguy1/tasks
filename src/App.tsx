import React from "react";
import {Button,Container,Col,Row} from "react-bootstrap"
import "./App.css";
// import { ChangeType } from "./components/ChangeType";
// import { RevealAnswer } from "./components/RevealAnswer";
// import { StartAttempt } from "./components/StartAttempt";
// import { TwoDice } from "./components/TwoDice";
// import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
//import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
//import { GiveAttempts } from "./form-components/GiveAttempts";
//import { EditMode } from "./form-components/EditMode";
//import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
//import { ChangeColor } from "./form-components/ChangeColor";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript coded by Ian Guy.
            </header>
            <hr></hr>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            {/* <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion> */}
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <ChooseTeam />
            <hr />
            <ColoredBox />
            <hr />
            <ShoveBox />
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
