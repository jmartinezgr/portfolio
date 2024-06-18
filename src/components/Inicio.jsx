import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';
import '../styles/Inicio.css';
import ListadoProyectos from './Proyectos/ListadoProyectos';
import { inicio } from '../assets/data/inicio';

const Inicio = () => {
    const lang = useLanguage();
    const data = inicio[lang];

    return (
        <div className="home">
            <h1 dangerouslySetInnerHTML={{ __html: data.h1 }} />
            <h2 className="title">
                {data.h2}
                <Link to={`/${lang}/contacto`}>{data.linkText}</Link>
            </h2>
            <section className="works">
                <h2 className="heading">{data.projectsHeading}</h2>
                <p>{data.projectsDescription}</p>
                <ListadoProyectos limite={2} />
            </section>
        </div>
    );
}

export default Inicio;
