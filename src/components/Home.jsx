import React, { useCallback, useLayoutEffect, useState } from 'react'

import { selections } from '../data'

import Question from './Question'
import Team from './Team'
import SortTeam from './SortTeam'

import listQuestion from '../data'
import { listTeam } from '../data'

import "../App.css"
import Picture from './Picture'
function Home() {
  const [newListTeam, setNewListTeam] = useState(listTeam)
  const [newListQuestion, setNewListQuestion] = useState(listQuestion)
  const [activeTeam, setActiveTeam] = useState(1);
  const [crrQuestion, setCrrQuestion] = useState(newListQuestion[0])
  const [correct, setCorrect] = useState(2)
  const [showTeam, setShowTeam] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const [listSelection, setListSelection] = useState(selections)

  const handleNextQuestion = useCallback((e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      setActiveTeam((prev) => prev < 3 ? prev + 1 : 1)
      setCrrQuestion((prev) => {
        const crrIndex = newListQuestion.indexOf(prev)
        if (crrIndex < newListQuestion.length - 1) {
          return newListQuestion[crrIndex + 1]
        }
        else return newListQuestion[0]
      })
      setCorrect(false)
      setShowQuestion(false)
    } else if (e.keyCode === 32) {
      setActiveTeam((prev) => prev < 3 ? prev + 1 : 1)

    } else if (e.keyCode === 27) {
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
      const previousListQuestion = listQuestion.filter(question => question.id <= crrId)
      setNewListQuestion([...previousListQuestion, specailQuestion, ...updateIdQuestion])
      setCrrQuestion(specailQuestion)
    }
  }, [correct])


  useLayoutEffect(() => {
    window.addEventListener("keyup", handleNextQuestion)

  }, [])

  return (
    <div className="home">
      {
        showTeam ? <Team listTeam={newListTeam} activeTeam={activeTeam} correct={correct} />
          : <SortTeam setShowTeam={setShowTeam} setTeam={setNewListTeam} team={newListTeam} />
      }
      {
        showQuestion ? <Question
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
          setListSelection={setListSelection}
        /> : showTeam && <Picture
          setShowQuestion={setShowQuestion}
          setCrrQuestion={setCrrQuestion}
          setListSelection={setListSelection}
          listSelection={listSelection}

        />
      }




    </div>
  )
}

export default Home
