import React, { useState } from 'react'
import "../App.css"
import Optional from './Optional'


function Picture({ setShowQuestion, setCrrQuestion, listSelection, setListSelection }) {
    return (
        <div className='wrapper'>
            <div className='main-feature'>
                <img src='https://www.brickfanatics.com/wp-content/uploads/Avatar-The-Way-of-Water-logo.jpg' alt="" />
                {listSelection.map(item =>
                    <Optional
                        key={item.id}
                        data={item}
                        setListSelection={setListSelection}
                        setShowQuestion={setShowQuestion}
                        setCrrQuestion={setCrrQuestion}

                    />)}

            </div>
        </div>
    )
}

export default Picture
