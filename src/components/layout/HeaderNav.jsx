import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import ToggleButton from '../ToogleButton';
import { flushSync } from "react-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const HeaderNav = () => {
    const lang = useLanguage();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 980);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

        localStorage.setItem('lang', language);

        const currentPath = window.location.pathname;
        const newPath = currentPath.replace(`/${lang}/`, `/${language}/`);
        navigate(newPath);
    };

    const src = lang === 'en' ? '/español.png' : '/english.png';

    const click = (name) => {
        if (!document.startViewTransition) {
            navigate('/' + lang + '/' + name);
        } else {
            document.startViewTransition(() => {
                flushSync(() => {
                    navigate('/' + lang + '/' + name);
                });
            });
        }
        if (isMobile) setMenuOpen(false);
    };

    return (
        <header>
            <div className="logo">
                <span>J</span>
                <h3>Juan Martinez FULLSTACK DEV</h3>
            </div>
            <nav>
                <ul className={`${isMobile ? 'menu' : ''} ${menuOpen ? 'open' : ''}`}>
                    <li>
                        <NavLink to={`/${lang}/inicio`} onClick={() => click("inicio")}>{lang === 'es' ? 'Inicio' : 'Home'}</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/${lang}/portafolio`} onClick={() => click("portafolio")}>{lang === 'es' ? 'Portafolio' : 'Portfolio'}</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/${lang}/sobre-mi`} onClick={() => click("sobre-mi")}>{lang === 'es' ? 'Sobre mi' : 'About me'}</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/${lang}/contacto`} onClick={() => click("contacto")}>{lang === 'es' ? 'Contacto' : 'Contact'}</NavLink>
                    </li>
                    <li>
                        <button onClick={handleOnClick}>
                            <img src={src} alt="Idioma" />
                        </button>
                    </li>
                    <li>
                        <ToggleButton handleColor={handleColor} />
                    </li>
                    {isMobile && (
                        <li className="close-menu" onClick={() => setMenuOpen(false)}>
                            <IoIosClose />
                        </li>
                    )}
                </ul>
                {isMobile && <IoIosMenu className="sub__menu" onClick={() => setMenuOpen(true)} />}
            </nav>
        </header>
    );
};

export default HeaderNav;
