import React from 'react'


const listChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "W"]
function LuckyWheel() {

    console.log(listChar.length)


    return (
        <div className='lucky'>
            <h2>Lucky</h2>

            <div className='main-lucky'>
                <div className='item-lucky A'>A</div>
                <div className='item-lucky B'>B</div>
                <div className='item-lucky C'>C</div>
                <div className='item-lucky D'>D</div>
                <div className='item-lucky F'>F</div>
            </div>
        </div>
    )
}

export default LuckyWheel
