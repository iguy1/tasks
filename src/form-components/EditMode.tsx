import React, { useState} from "react";
import {Form} from "react-bootstrap"

export function EditMode(): React.JSX.Element {
    const [inEdit, setEdit]  = useState<boolean>(false);
    const [isStudent, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your Name");

const updateUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEdit(event.target.checked);
}

const updateName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
}

const updateStudent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudent(event.target.checked);
};


    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check type = "switch" checked = {inEdit} onChange = {updateUser}>
            </Form.Check>
            {inEdit ? (
                <div>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control value  ={name} onChange = {updateName}></Form.Control>
            </Form.Group>

            <Form.Check type= "checkbox" id= "student-checkbox" label = "Student?"checked = {isStudent} onChange = {updateStudent}></Form.Check>
            </div>
            ) : (
                <div>{name} is {isStudent ? "a student" : "not a student"}</div>
            )}
        </div>  
    );
}
