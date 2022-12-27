import React, { useState } from 'react'
import "../App.css"
import Notification from './Notification'
import Optional from './Optional'


function Picture({ setShowQuestion, setCrrQuestion, listSelection, setListSelection, listTeam, activeTeam, specail, setSpecail, newListQuestion }) {

    return (
        <div className='wrapper'>
            <div className='main-feature'>
                <img src='https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.15752-9/318459506_707116820989772_690622447750104254_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=PkabbBn88dgAX8MGvAG&_nc_oc=AQlvnQDgAkwgeH5ayv1UQJfCYD0TRjKT2gxQEClXQ8gD4IlXkFPIeGDj6Fg7q0McyLc&_nc_ht=scontent.fsgn5-2.fna&oh=03_AdQy9uFwDnYFrt2fEk7JJdBxCgQSIgRBfAdWuTMSoHUfLA&oe=63D26CDD' alt="" />
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
