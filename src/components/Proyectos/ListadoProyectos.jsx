import { trabajos } from '../../assets/data/trabajos';
import { Link } from 'react-router-dom';
import '../../styles/Portafolio.css';
import PropTypes from 'prop-types';
import { useLanguage } from '../../hooks/useLanguage';

// Función para obtener elementos aleatorios de un array
const getRandomElements = (array, numElements) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
}

const ListadoProyectos = ({ limite = undefined }) => {

    const lang = useLanguage()

    // Elegimos si mostramos todos los trabajos o solo los primeros
    const filterData = trabajos[lang]
    const data = limite !== undefined ? getRandomElements(filterData , limite) : filterData

    return (
        <div className="page">
            <section className="works-container">
                {data.map((trabajo) => {
                    return (
                        <article key={trabajo.id} className="work-item">
                            <div className="mask">
                                <img 
                                    src={`/images/${trabajo.id}.jpeg`} 
                                    alt={trabajo.nombre}/>
                            </div>
                            <span>{trabajo.categorias}</span>
                            <h2 style={{ viewTransitionName: `title${trabajo.id}`}} >
                                <Link 
                                    to={'/'+lang+'/proyecto/' + trabajo.id}> 
                                    
                                    {trabajo.nombre}
                                </Link>
                            </h2>
                            <h3>{trabajo.tecnologias ? trabajo.tecnologias.join(', ') : 'Tecnologías no disponibles'}</h3>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

ListadoProyectos.propTypes = {
    limite: PropTypes.number
}

export default ListadoProyectos;
