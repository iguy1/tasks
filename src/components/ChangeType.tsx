import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>("short_answer_question");
  
    function changeQuestion():void{
        setQuestion(
            question === 'multiple_choice_question'?
            'short_answer_question':
            'multiple_choice_question'
        );
    }
    return(
        <div>
            <div>
                {question === 'multiple_choice_question'?
                'Multiple Choice':
                'Short Answer'
            }
            </div>
            <Button onClick = {changeQuestion}>Change Type </Button>
        </div>
    );
}
