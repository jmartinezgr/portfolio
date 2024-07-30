import { useLanguage } from '../hooks/useLanguage'
import { inicio } from '../assets/data/inicio'
import '../styles/inicio-mio.css'
import TypeWriter from './layout/Typewriter'

//Social Icons
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";


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
                                    I&apos;m <span className="home__name">Juan</span><br />
                                </span>
                                and a <TypeWriter words={["UI/UX Designer", "Developer", "Student"]}
                                    writeSpeed={0.3}
                                    eraseSpeed={0.3}
                                    pauseBetween={1}
                                />
                            </h1>
                            <p className="home__description">
                                I&apos;m a Web Developer with academic experience in UI/UX Design.
                                I have a passion for creating beautiful and functional websites.
                            </p>

                            <div className="social">
                                <ul className="social__list">
                                    <li className="social__item"><a href=""><FaGithub className='__icon' /></a></li>
                                    <li className="social__item"><a href=""><FaTwitter className='__icon' /></a></li>
                                    <li className="social__item"><a href=""><PiInstagramLogoFill className='__icon' /></a></li>
                                </ul>
                            </div>
                        </div>
                        <a href="#" className="btn btn--primary">Download CV</a>
                    </div>
                    <img src="/me.png" alt="" className="home__image" />
                </div>
            </div>
        </section>
    )
}

export default Inicio;