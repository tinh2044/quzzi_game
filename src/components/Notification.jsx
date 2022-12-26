import React from 'react'

import '../App.css'

function Notification({ correct, points, activeTeam, listTeam, showTeam, specail = false }) {
  return (

    showTeam && (
      <div className='note' >
        <p>
          {
            correct === true && !specail ? `Với câu này nhóm các bạn được ${points < 0 ? "trừ" : "cộng"} ${Math.abs(points)} điểm`
              : correct === false && !specail ? (
                <span >
                  Nhóm bạn đã trả lời sai
                </span>
              )
                : correct === 2 && specail ? "Xin mời Mr.Dú "
                  : specail ? "Xin chúc mừng thầy Mr.Dú."
                    : `Xin mời ${activeTeam <= 3 ? listTeam[activeTeam - 1].name : listTeam[0].name}`
          }
        </p>
      </div>

    )
  )


}

export default Notification