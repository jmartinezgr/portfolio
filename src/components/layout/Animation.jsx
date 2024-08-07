import { useState, useEffect } from 'react'
import Typewriter from './Typewriter'
import '../../styles/Loader.css'
import PropTypes from 'prop-types'

const Animation = ({ setAnimation, setAnimationDisplayed }) => {
    const [animated, setAnimated] = useState(false)
    const [text, setText] = useState('Pulsa para comenzar')

    useEffect(() => {
        const interval = setInterval(() => {
            /*setText((prevText) => prevText === 'Pulsa para comenzar' ? 'Pulse to start' : 'Pulsa para comenzar');*/
        }, 1000)
        return () => clearInterval(interval);
    }, [])

    return (
        <div id="loading-animation"
            className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-screen h-screen bg-black text-white"
            onClick={() => {
                if (!animated) {
                    setAnimated(true)
                    setAnimation(true)
                }
            }}
        >
            <div className="cubo">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>


            <div className="text-xl mt-4 font-mono">
                {animated ? (
                    <>
                        <Typewriter
                            words={['Desarrollo', 'Diseño', 'Identidad', 'Eficiencia']}
                            writeSpeed={0.05}
                            eraseSpeed={0.03}
                            pauseBetween={0.5}
                            setAnimationDisplayed={setAnimationDisplayed}
                        />
                        <audio src="/type_sound.mp3" autoPlay>
                            Tu navegador no soporta el elemento audio.
                        </audio>
                    </>)
                    :
                    (
                        <span className="blink-slow">{text}</span>
                    )}
            </div>
        </div>
    )
}

Animation.propTypes = {
    setAnimation: PropTypes.func,
    setAnimationDisplayed: PropTypes.func,
}


export default Animation