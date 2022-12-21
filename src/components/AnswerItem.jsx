import React, { useEffect, useState } from 'react'

function AnswerItem({ data, question, handleAnswer, index, checkAnswer }) {
    const [showAnswer, setShowAnswer] = useState(false)

    useEffect(() => {
        setShowAnswer(false)
        setTimeout(() => {
            setShowAnswer(true)

        }, 1);
    }, [question])
    return (
        showAnswer &&
        (<p
            onClick={() => handleAnswer(data, index)}
            className={`answer-item ${showAnswer ? data : ""} ${checkAnswer[index] === false ? "incorrect" : checkAnswer[index] === true ? "correct" : ""}`}>
            {`${data}. ${question.answer[data]}`}
        </p>)
    )
}

export default AnswerItem
