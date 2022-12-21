import React, { useEffect, useLayoutEffect, useState } from 'react'
import listQuestion, { listPoints } from '../data'
import '../App.css'
import Notification from './Notification'
import AnswerItem from './AnswerItem'
function Question({ question, setQuestion, setActiveTeam, setNewListTeam, activeTeam, setCorrect, correct, listTeam, showTeam, setListSelection }) {
  const [checkAnswer, setCheckAnswer] = useState([NaN, NaN, NaN, NaN])
  const [points, setPoints] = useState(listPoints[Math.floor(Math.random() * listPoints.length)])
  const [showNote, setShowNote] = useState(false)
  const [showQuestion, setShowQuestion] = useState(false)
  const handleAnswer = (answer, index) => {
    if (question.correct.includes(answer)) {

      setListSelection((prev => {

        return prev.map(item => item.id === question.id ? { ...item, selected: true } : item)
      }))

      setShowNote(false)
      setTimeout(() => {

        setShowNote(true)
      }, 1);
      setNewListTeam((prev) => {
        let crrTeam = prev[activeTeam - 1];
        crrTeam = {
          ...crrTeam,
          points: crrTeam.points + points
        }
        const newListTeam = prev.map(item => item.id !== crrTeam.id ? item : crrTeam);
        const listPointOfTeam = newListTeam.map(item => {
          return {
            point: item.points,
            id: item.id
          }
        }).sort((a, b) => b.point - a.point);
        const listRankOfTeam = listPointOfTeam.map(item => item.id)
        return newListTeam.map(team => {
          return {
            ...team,
            rank: listRankOfTeam.indexOf(team.id) + 1


          }
        })
      })
      setCheckAnswer((prev) => prev.map((item, indexPrev) => indexPrev === index ? true : false))

      setCorrect(true)
    } else {
      setShowNote(false)

      setTimeout(() => {

        setShowNote(true)
      }, 1);

      let check = checkAnswer
      check[index] = false

      setActiveTeam((prev) => (prev < 3 && question.correct.length < 4) ? prev + 1 : question.correct.length === 4 ? prev : 1)

      setCheckAnswer((prev) => prev.map((item, indexPrev) => indexPrev === index ? false : item))

      setCorrect(false)
    }

  }

  useLayoutEffect(() => {

    setTimeout(() => {

      setShowNote(true)
      setShowQuestion(true)
    }, 1);
    setCheckAnswer([NaN, NaN, NaN, NaN])
    setPoints(listPoints[Math.floor(Math.random() * listPoints.length)])

    setCorrect(2)

    return () => {
      setShowNote(false)
      setShowQuestion(false)

    }
  }, [question])
  return (
    showTeam && (
      <div className="question">
        {showQuestion && (
          <h1 style={{

          }}>{`Câu ${question.id}: ${question.nameQuestion}`}</h1>
        )}
        <div className='answer'>
          {Object.keys(question.answer).map((data, index) => (
            <AnswerItem key={data} data={data} question={question} handleAnswer={handleAnswer} index={index} checkAnswer={checkAnswer} />
          ))}
        </div>


        {
          showNote === true && <Notification activeTeam={activeTeam} correct={correct} listTeam={listTeam} points={points} showTeam={showTeam} />
        }

      </div>)

  )
}

export default Question
