import { NavLink } from "react-router-dom"
import { useLanguage } from "../../hooks/useLanguage"

const HeaderNav = () => {
    
    const lang = useLanguage()
    
    return (
        <header>
            <div className="logo">
                <span>J</span>
                <h3> Juan Martinez FULLSTACK DEV</h3>
            </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={`/${lang}/inicio`}>{lang === 'es' ? 'Inicio' : 'Home'}</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/${lang}/portafolio`}>{lang === 'es' ? 'Portafolio' : 'Portfolio'}</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/${lang}/servicios`}>{lang === 'es' ? 'Servicios' : 'Services'}</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/${lang}/curriculum`}>{lang === 'es' ? 'Curriculum' : 'Resume'}</NavLink>
                        </li>
                        <li>
                            <NavLink to={`/${lang}/contacto`}>{lang === 'es' ? 'Contacto' : 'Contact'}</NavLink>
                        </li>
                        <li>
                            <button>
                                <img src="/español.png" alt="" />
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src="/english.png" alt="" />
                            </button>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}



export default HeaderNav