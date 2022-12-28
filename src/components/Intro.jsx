import React, { useEffect, useLayoutEffect, useState } from 'react'
function Intro() {
    // const [intro, setIntro] = useState(listIntro[0])

    // const [crrIntro, setCrrIntro] = useState(intro[0])
    // const [step, setStep] = useState(1)
    // const [delay, setDelay] = useState(300)
    // useLayoutEffect(() => {
    //     setTimeout(() => {
    //         if (crrIntro.length === intro.length) {
    //             // setCrrIntro(intro.slice(0, crrIntro.length))
    //             setDelay(100)
    //             setStep(-1)
    //             setCrrIntro(crrIntro.slice(0, crrIntro.length - 1))
    //         } else if (crrIntro.length === 0) {
    //             setIntro((prev) => listIntro.indexOf(prev) < listIntro.length - 1 ? listIntro[listIntro.indexOf(prev) + 1] : listIntro[0])


    //             setCrrIntro(intro[0])

    //             setDelay(300)
    //             setStep(1)
    //         } else if (crrIntro.length < intro.length) {
    //             setCrrIntro(intro.slice(0, crrIntro.length + step))
    //         }

    //     }, delay);


    // }, [crrIntro])
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300);
    const [index, setIndex] = useState(1);
    const toRotate = ["Welcome to Quiz Game", "Was create by group 3", "Enjoy cái moment này"]
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(200);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex((prevIndex) => prevIndex - 1);
            setDelta(300);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(300);
        } else {
            setIndex((prevIndex) => prevIndex + 1);
        }
    };
    return (
        <h1 className='intro'>
            {`${text + "..."}`}
        </h1>
    )
}

export default Intro
