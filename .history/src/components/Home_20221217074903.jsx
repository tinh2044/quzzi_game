import React, { useCallback, useLayoutEffect, useState } from 'react'

import Question from './Question'
import Team from './Team'
import SortTeam from './SortTeam'

import listQuestion from '../data'
import { listTeam } from '../data'

import "../App.css"
function Home() {
  const [newListTeam, setNewListTeam] = useState(listTeam)
  const [newListQuestion, setNewListQuestion] = useState(listQuestion)
  const [activeTeam, setActiveTeam] = useState(1);
  const [crrQuestion, setCrrQuestion] = useState(newListQuestion[0])
  const [correct, setCorrect] = useState(false)
  const [showTeam, setShowTeam] = useState(false)
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
    } else if (e.keyCode === 32) {
      setActiveTeam((prev) => prev < 3 ? prev + 1 : 1)

    } else if (e.keyCode === 17) {
      const specailQuestion = {
        id: crrQuestion.id + 1,
        nameQuestion: "Will you give our team 8 point",
        answer: {
          A: "Yes",
          B: "Why not",
          C: "Of course",
          D: "Not of no"
        },
        correct: "ABCD",
      }
      const crrId = crrQuestion.id
      const updateIdQuestion = listQuestion.filter(question => question.id > crrId).map(question => { return { ...question, id: question.id + 1 } })
      const updateListQuestion = listQuestion.filter(question => question.id <= crrId)

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
        <Question
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
