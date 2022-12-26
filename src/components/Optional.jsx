import React, { useState } from 'react'
import "../App.css"

function Optional({ data, setListSelection, setShowQuestion, setCrrQuestion, specail, setSpecail, listQuestion }) {
    const handleSelection = (id) => {
        if (!data.selected && !specail) {

            setCrrQuestion(listQuestion[id - 1])
            setTimeout(() => {
                setShowQuestion(true)
            }, 500);
        } else if (!data.selected && specail) {

            const specailQuestion = {
                id,
                nameQuestion: "Will you give our team 8 point",
                answer: {
                    A: "Yes",
                    B: "Why not",
                    C: "Of course",
                    D: "Not of no"
                },
                correct: "ABCD",
            }
            setCrrQuestion(specailQuestion)
            setTimeout(() => {
                setShowQuestion(true)
            }, 500);
        }
    }
    return (
        <div
            style={{
                opacity: data.selected && !data.incorrect ? 0 : 1,
                cursor: `${!data.selected && !data.incorrect ? "pointer" : data.selected && !data.incorrect ? "default" : "not-allowed"}`,
            }}
            index={data.id}
            className={`main-item ${data.selected && !data.incorrect ? "selected" : ""} ${data.incorrect ? "item-incorrect" : ""} `}
            onClick={() => handleSelection(data.id)}

        >{data.id}</div>
    )
}

export default Optional