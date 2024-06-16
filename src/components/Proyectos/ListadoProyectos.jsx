import { trabajos } from '../../assets/data/trabajos';
import { Link } from 'react-router-dom';
import '../../styles/Portafolio.css';
import PropTypes from 'prop-types';

// Función para obtener elementos aleatorios de un array
const getRandomElements = (array, numElements) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
}

const ListadoProyectos = ({ limite = undefined }) => {
    // Elegimos si mostramos todos los trabajos o solo los primeros
    const filterData = trabajos["en"]
    const data = limite !== undefined ? getRandomElements(filterData , limite) : filterData

    return (
        <div className="page">
            <section className="works-container">
                {data.map((trabajo) => {
                    return (
                        <article key={trabajo.id} className="work-item">
                            <div className="mask">
                                <img src={"/src/assets/images/" + trabajo.id + ".png"} alt={trabajo.nombre} />
                            </div>
                            <span>{trabajo.categorias}</span>
                            <h2><Link to={'/proyecto/' + trabajo.id}> {trabajo.nombre}</Link></h2>
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