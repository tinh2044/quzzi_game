import React, { useEffect, useState } from 'react'
import "../App.css"

function Optional({ data, setListSelection, setShowQuestion, setCrrQuestion, specail, setSpecail, listQuestion }) {
    const [isSelected, setIsSelected] = useState(false)
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
    useEffect(() => {
        if (data.selected && !data.incorrect) {
            setTimeout(() => {
                setIsSelected(true)
            }, 100 + 10 * data.id);
        }

    }, [data.id, data.incorrect, data.selected])

    return (
        <div
            style={{
                // transition: `background 0.3s linear, color 0.7s linear, opacity ${data.id / 10}s linear`,
                cursor: `${!data.selected && !data.incorrect ? "pointer" : data.selected && !data.incorrect ? "default" : "not-allowed"}`,
            }}
            index={data.id}
            className={`main-item ${isSelected ? "selected" : ""} ${data.incorrect ? "item-incorrect" : ""} `}
            onClick={() => handleSelection(data.id)}

        >{data.id}</div>
    )
}

export default Optional