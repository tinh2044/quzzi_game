import React from 'react'

import '../App.css'

function Notification({ correct, points, activeTeam, listTeam, showTeam }) {
  return (

    showTeam && (
      <div className='note' >
        <p>
          {
            correct === true ? `Với câu này nhóm các bạn được ${points < 0 ? "trừ" : "cộng"} ${Math.abs(points)} điểm`
              : correct === false ? (
                <span >
                  Nhóm bạn đã trả lời sai
                  <p>{`Xin mời ${listTeam[activeTeam - 1].name} trả lời`}</p>
                </span>
              )
                : `Đến lượt của ${activeTeam <= 3 ? listTeam[activeTeam - 1].name : listTeam[0].name}`
          }
        </p>
      </div>

    )
  )


}

export default Notification