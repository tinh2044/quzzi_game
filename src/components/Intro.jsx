import React, { useLayoutEffect, useState } from 'react'
const listIntro = ["Welcome to Quiz Game", "Was create by group 3"]
function Intro() {
    const [intro, setIntro] = useState(listIntro[0])

    const [crrIntro, setCrrIntro] = useState(intro[0])
    const [step, setStep] = useState(1)
    const [delay, setDelay] = useState(300)
    useLayoutEffect(() => {
        setTimeout(() => {
            if (crrIntro.length === intro.length) {
                // setCrrIntro(intro.slice(0, crrIntro.length))
                setDelay(100)
                setStep(-1)
                setCrrIntro(crrIntro.slice(0, crrIntro.length - 1))
            } else if (crrIntro.length === 0) {
                setIntro((prev) => listIntro.indexOf(prev) < listIntro.length - 1 ? listIntro[listIntro.indexOf(prev) + 1] : listIntro[0])


                setCrrIntro(intro[0])

                setDelay(300)
                setStep(1)
            } else if (crrIntro.length < intro.length) {
                setCrrIntro(intro.slice(0, crrIntro.length + step))
            }

        }, delay);


    }, [crrIntro])

    return (
        <h1 className='intro'>
            {`${crrIntro + "..."}`}
        </h1>
    )
}

export default Intro
