import { useLanguage } from '../hooks/useLanguage'
import { inicio } from '../assets/data/inicio'
import TypeWriter from './layout/Typewriter'

//Social Icons
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

//Estilos
import '../styles/inicio.css'

const Inicio = () => {
    const lang = useLanguage()
    const data = inicio[lang]

    return (
        <section className='section home' id='home'>
            <div className="container">
                <div className="grid home_wrapper">
                    <div className="home__body">
                        <div className="info">
                            <span className="home__subtitle">{data.welcome}</span>
                            <h1 className="home__title">
                                <span className='home__principal'>
                                    {data.i} <span className="home__name">Juan</span><br />
                                </span>
                                {data.and}<TypeWriter words={data.typer}
                                    writeSpeed={0.3}
                                    eraseSpeed={0.3}
                                    pauseBetween={1}
                                />
                            </h1>
                            <p className="home__description">
                                {data.desc}
                            </p>

                            <div className="social">
                                <ul className="social__list">
                                    <li className="social__item"><a href="https://github.com/jmartinezgr" target='__blank'><FaGithub className='__icon' /></a></li>
                                    <li className="social__item"><a href="https://github.com/jmartinezgr" target='__blank'><FaTwitter className='__icon' /></a></li>
                                    <li className="social__item"><a href="https://github.com/jmartinezgr" target='__blank'><PiInstagramLogoFill className='__icon' /></a></li>
                                </ul>
                            </div>
                        </div>
                        <a href="/cv.pdf" download="jmartinezgr_curriculum.pdf" className="btn btn--primary">{data.cv}</a>
                    </div>
                    <img src="/me.png" alt="jmartinezgr image" className="home__image" />
                </div>
            </div>
        </section>
    )
}

export default Inicio;