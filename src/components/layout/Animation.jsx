import { useState } from 'react'
import Typewriter from './Typewriter'
import '../../styles/Loader.css'
import PropTypes from 'prop-types'

const Animation = ({ setAnimation }) => {
    const [animated, setAnimated] = useState(false);
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

            {animated && (
                <div className="text-xl mt-4 font-mono">
                    <Typewriter
                        words={['Desarrollo', 'Diseño', 'Identidad', 'Eficiencia']}
                        writeSpeed={0.05}
                        eraseSpeed={0.03}
                        pauseBetween={0.5}
                    />
                    <audio src="/type_sound.mp3" autoPlay>
                        Tu navegador no soporta el elemento audio.
                    </audio>
                </div>
            )}
        </div>
    )
}

Animation.propTypes = {
    setAnimation: PropTypes.func.isRequired
}


export default Animation