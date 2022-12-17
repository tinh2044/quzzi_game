import React, { useCallback, useLayoutEffect, useState } from 'react'

import Question from './Question'
import Team from './Team'
import SortTeam from './SortTeam'

import listQuestion from '../data'
import { listTeam } from '../data'
import LuckyWheel from './LuckyWheel'

import "../App.css"
function Home() {
  const [newListTeam, setNewListTeam] = useState(listTeam)
  const [activeTeam, setActiveTeam] = useState(1);
  const [crrQuestion, setCrrQuestion] = useState(listQuestion[0])
  const [correct, setCorrect] = useState(false)
  const [showTeam, setShowTeam] = useState(true)
  const [showWheel, setShowWheel] = useState(true)
  const handleNextQuestion = useCallback((e) => {

    if (e.keyCode === 13 && correct) {
      setActiveTeam((prev) => prev < 3 ? prev + 1 : 1)
      setCorrect(false)
      setCrrQuestion((prev) => {
        const crrIndex = listQuestion.indexOf(prev)
        if (crrIndex < listQuestion.length - 1) {
          return listQuestion[crrIndex + 1]
        }
        else return listQuestion[0]
      })
    }
  }, [correct])


  useLayoutEffect(() => {
    window.addEventListener("keyup", handleNextQuestion)

  }, [handleNextQuestion])

  return (
    <div className="home">
      {
        showTeam ? <Team listTeam={newListTeam} activeTeam={activeTeam} correct={correct} />
          : <SortTeam setShowTeam={setShowTeam} setTeam={setNewListTeam} team={newListTeam} />
      }
      {
        showWheel ? <LuckyWheel />
          : <Question
            question={crrQuestion}
            setQuestion={setCrrQuestion}
            lengthListQuestion={listQuestion.length}
            setActiveTeam={setActiveTeam}
            setNewListTeam={setNewListTeam}
            activeTeam={activeTeam}
            setCorrect={setCorrect}
            correct={correct}
            listTeam={newListTeam}
            showTeam={showTeam}
          />
      }




    </div>
  )
}

export default Home