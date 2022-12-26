import React, { useState } from 'react'
import "../App.css"
import Notification from './Notification'
import Optional from './Optional'


function Picture({ setShowQuestion, setCrrQuestion, listSelection, setListSelection, listTeam, activeTeam, specail, setSpecail, newListQuestion }) {

    return (
        <div className='wrapper'>
            <div className='main-feature'>
                <img src='https://images5.alphacoders.com/129/1292802.jpg' alt="" />
                {listSelection.map(item =>
                    <Optional
                        key={item.id}
                        data={item}
                        setListSelection={setListSelection}
                        setShowQuestion={setShowQuestion}
                        setCrrQuestion={setCrrQuestion}
                        specail={specail}
                        setSpecail={setSpecail}
                        listQuestion={newListQuestion}

                    />)}

            </div>

            <Notification showTeam={true} correct={2} listTeam={listTeam} activeTeam={activeTeam} />
        </div>
    )
}

export default Picture
