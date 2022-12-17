import React, { useEffect, useState } from 'react'
import CountUp from "react-countup"

function TeamItem({ team, activeTeam, correct }) {
    const [showTeam, setShowTeam] = useState(false)
    const [crrPoint, setCrrPoint] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            setShowTeam(true)
        }, 300 * team.id);
    }, [team])
    return (
        <div key={team.id} className={`team_item ${team.id === activeTeam ? "active" : ""}`} style={{ transform: `translate(${!showTeam ? -500 : 0}px,${116 * (team.rank - 1)}px)` }}>
            <h1>{team.name}</h1>
            <div className='point'>
                <p>Điểm: </p>
                {
                    crrPoint !== team.points ? <CountUp separator='' className='number' end={team.points} start={crrPoint} duration={1.5} onEnd={() => setCrrPoint(team.points)} />
                        : crrPoint
                }
                <p>đ</p>
            </div>
        </div>
    )
}

export default TeamItem
