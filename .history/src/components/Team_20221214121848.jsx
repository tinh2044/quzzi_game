import React from 'react'


import "../App.css"
import TeamItem from './TeamItem'

function Team({ listTeam, activeTeam, correct }) {
  const orderTeam = listTeam.map(item => item.name).join(" -> ")
  console.log(orderTeam)

  return (
    <div className='team'>
      {listTeam.map(item => (
        <TeamItem key={item.id} team={item} activeTeam={activeTeam} correct={correct} />
      ))}
      <div className='order-team'>
        <p >Thứ tự chơi</p>
        {orderTeam}
      </div>
    </div>
  )
}

export default Team
