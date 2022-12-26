import React from 'react'
import Intro from './Intro'

function Guide({ setShowHome }) {
    return (
        <div className='guide'>
            <Intro />
            <p>We will have three teams</p>
            <p>There will be a mini game to decide the order of the teams</p>
            <p>Enter play order vd(231)</p>
            <p>Select the question box and answer if it is wrong, the question will be closed and to the next group </p>
            <p>If the answer is correct, the group will be added or subtracted a random number of points</p>
            <p>The group that can guess what the picture is wins</p>
            <p>If no group guesses, the group with the highest score wins</p>
            <div className='counting' onClick={() => setShowHome(true)}>Counting</div>
        </div>
    )
}

export default Guide
