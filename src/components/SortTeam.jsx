import React, { useState } from 'react'

import "../App.css"

function SortTeam({ setShowTeam, setTeam, team }) {
    const [valueInput, setValueInput] = useState("")
    const handleClick = (event) => {
        event.preventDefault();
        setValueInput((event.target.value.length < 4) ? event.target.value : valueInput)
    }
    const handleShowTeam = (event) => {
        const orderTeam = valueInput.split("").map(value => parseInt(value))
        const newTeam = orderTeam.map((value, index) => {
            const crrTeam = team.find(item => item.id === value)

            return {
                ...crrTeam,
                id: index + 1,
                rank: index + 1,

            }
        })


        setTeam(newTeam);
        setShowTeam(true)
    }
    return (
        <div className='overlay'>
            <div className='sort-team'>
                <label htmlFor='input' >
                    Nhập thứ tự chơi
                </label>

                <input id="input" placeholder='Nhập thứ tự chơi' value={valueInput} onChange={handleClick} />
                <div className='button-submit' onClick={handleShowTeam}>
                    Tiếp
                </div>
            </div>
        </div>
    )
}

export default SortTeam
