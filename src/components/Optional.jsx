import React, { useState } from 'react'
import listQuestion from '../data'
import "../App.css"

function Optional({ data, setListSelection, setShowQuestion, setCrrQuestion }) {
    const [selected, setSelected] = useState(false)
    const handleSelection = (id) => {
        if (!data.selected) {

            setCrrQuestion(listQuestion[id - 1])
            setTimeout(() => {
                setShowQuestion(true)
            }, 1000);
        }
    }
    return (
        <div
            style={{ opacity: data.selected ? 0 : 1 }}
            index={data.id}
            className={`main-item ${selected ? "selected" : ""} `}
            onClick={() => handleSelection(data.id)}

        >{data.id}</div>
    )
}

export default Optional