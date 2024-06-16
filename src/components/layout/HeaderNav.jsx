import { NavLink, useNavigate } from "react-router-dom"
import { useLanguage } from "../../hooks/useLanguage"

const HeaderNav = () => {
    const lang = useLanguage();
    const navigate = useNavigate();

    const handleOnClick = (l) => {
        if (l !== lang) {
            const currentPath = window.location.pathname;
            console.log(currentPath)

            const newPath = currentPath.replace(`/${lang}/`, `/${l}/`);
            console.log(newPath)
            navigate(newPath)
        }
    }

    return (
        <header>
            <div className="logo">
                <span>J</span>
                <h3>Juan Martinez FULLSTACK DEV</h3>
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
                        <button onClick={() => handleOnClick('es')}>
                            <img src="/español.png" alt="Español" />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleOnClick('en')}>
                            <img src="/english.png" alt="English" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderNav