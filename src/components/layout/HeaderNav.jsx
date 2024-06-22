import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import ToggleButton from '../ToogleButton';

const HeaderNav = () => {
    const lang = useLanguage();
    const navigate = useNavigate();

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        applyDarkMode(isDarkMode);
    }, []);

    const applyDarkMode = (isDarkMode) => {
        if (isDarkMode) {
            document.documentElement.style.setProperty('--background-color', '#111b22');
            document.documentElement.style.setProperty('--text-pcolor', '#fcfdfd');
            document.documentElement.style.setProperty('--text-scolor', '#ddd');
            document.documentElement.style.setProperty('--primary-color', '#007aff');
            document.documentElement.style.setProperty('--secondary-color', '#FFA500');
        } else {
            document.documentElement.style.setProperty('--background-color', '#f5f5f5');
            document.documentElement.style.setProperty('--text-pcolor', '#000');
            document.documentElement.style.setProperty('--text-scolor', '#333');
            document.documentElement.style.setProperty('--primary-color', '#007aff');
            document.documentElement.style.setProperty('--secondary-color', '#FFA500');
        }
    };

    const handleColor = () => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        localStorage.setItem('darkMode', !isDarkMode);
        applyDarkMode(!isDarkMode);
    };

    const handleOnClick = () => {
        let language;
        if (lang === 'es') language = 'en';
        else language = 'es';

        // Guardar el idioma en el localStorage
        localStorage.setItem('lang', language);
        
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(`/${lang}/`, `/${language}/`);
        navigate(newPath);
    };


    const src = lang === 'en' ? '/español.png' : '/english.png';

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
                    {/*
                    <li>
                        <NavLink to={`/${lang}/servicios`}>{lang === 'es' ? 'Servicios' : 'Services'}</NavLink>
                    </li>
                    */}
                    <li>
                        <NavLink to={`/${lang}/curriculum`}>{lang === 'es' ? 'Sobre mi' : 'Aboute me'}</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/${lang}/contacto`}>{lang === 'es' ? 'Contacto' : 'Contact'}</NavLink>
                    </li>
                    <li>
                        <button onClick={handleOnClick}>
                            <img src={src} alt="Español" />
                        </button>
                    </li>
                    <li>
                        <ToggleButton handleColor={handleColor} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNav;
