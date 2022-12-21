import React from 'react'

function Guide({ setShowHome }) {
    return (
        <div className='guide'>
            <p>Chúng ta sẽ có ba team</p>
            <p>Sẽ chơi một trò chơi nhỏ để quyết định thứ tự chơi của các team</p>
            <p>Nhập thứ tự chơi vd(231)</p>
            <p>Chọn ô câu hỏi và trả lời nếu sai thì câu đó sẽ được nhóm khác trả lời</p>
            <p>Nếu trả lời đúng thì nhóm sẽ được cộng hoặc trừ số điểm ngẫu nhiên</p>
            <p>Nhóm nào đoán được là hình gì thì chiến thắng </p>
            <p>Nếu không có nhóm nào đoán được thì nhóm nào cao điểm nhất sẽ thắng</p>
            <div className='counting' onClick={() => setShowHome(true)}>Tiep tuc</div>
        </div>
    )
}

export default Guide
