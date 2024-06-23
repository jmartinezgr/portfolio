import { useLanguage } from '../../hooks/useLanguage';

const Footer = () => {
    const year = new Date().getFullYear();
    const lang = useLanguage();

    return (
        <footer>
            {lang === 'es' 
                ? `Hecho con \u2764 por jmartinezgr © ${year}`
                : `Made with \u2764 by jmartinezgr © ${year}`
            }
        </footer>
    );
}

export default Footer;