import React from 'react'


const listChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W"]
function LuckyWheel() {

    console.log(listChar.length)


    return (
        <div className='lucky'>
            <h2>Lucky</h2>

            <div className='main-lucky'>
                <div className='char A'></div>
                <div className='char B'></div>
                <div className='char C'></div>
                <div className='char D'></div>
            </div>
        </div>
    )
}

export default LuckyWheel
