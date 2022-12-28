import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import win from "../media/win.mp3"
import lose from "../media/lose.mp3"
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
  const [specail, setSpecail] = useState(false)

  const winAudioRef = useRef(null)
  const loseAudioRef = useRef(null)

  const handleNextQuestion = useCallback((e) => {
    if (e.keyCode === 13) {
      if (!specail) setActiveTeam((prev) => prev < 3 ? prev + 1 : 1)
      setCrrQuestion((prev) => {
        const crrIndex = newListQuestion.indexOf(prev)
        if (crrIndex < newListQuestion.length - 1) {
          return newListQuestion[crrIndex + 1]
        }
        else return newListQuestion[0]
      })
      setCorrect(false)
      setShowQuestion(false)
      setSpecail(false)

    } else if (e.keyCode === 32) {
      setActiveTeam((prev) => prev < 3 ? prev + 1 : 1)

    } else if (e.keyCode === 8) {
      setSpecail(true)
    } else if (e.keyCode === 65) {
      setListSelection((prev) => prev.map(item => { return { ...item, selected: true } }))
    }
  }, [correct])


  useLayoutEffect(() => {
    window.addEventListener("keyup", handleNextQuestion)

    const length = listQuestion.length;
    const hasIndex = []
    const questions = []
    while (hasIndex.length !== length) {
      let index = Math.floor(Math.random() * length)
      while (hasIndex.includes(index)) {
        index = Math.floor(Math.random() * length)
      }
      questions.push(listQuestion[index])
      hasIndex.push(index)

    }
    setNewListQuestion(questions.map((item, index) => { return { ...item, id: index + 1 } }))

  }, [])
  useEffect(() => {
    if (correct === false) {
      setTimeout(() => {
        setShowQuestion(false)
      }, 3000)
    }
  }, [correct])
  useEffect(() => {
    winAudioRef.current.pause()
    loseAudioRef.current.pause()
  }, [showQuestion])
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
          setShowQuestion={setShowQuestion}
          specail={specail}
          refWinAudio={winAudioRef}
          refLoseAudio={loseAudioRef}

        /> : showTeam && <Picture
          setShowQuestion={setShowQuestion}
          setCrrQuestion={setCrrQuestion}
          setListSelection={setListSelection}
          listSelection={listSelection}
          listTeam={newListTeam}
          activeTeam={activeTeam}
          specail={specail}
          setSpecail={setSpecail}
          newListQuestion={newListQuestion}
        />
      }
      <audio src={win} ref={winAudioRef} />
      <audio src={lose} ref={loseAudioRef} />



    </div>
  )
}

export default Home
