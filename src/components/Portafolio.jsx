import '../styles/Portafolio.css'
import ListadoProyectos from './Proyectos/ListadoProyectos'

const Portafolio = () => {
    return (
        <div className="page">
            <h1 className="heading">Portafolio</h1>
            <ListadoProyectos/>
        </div>
    )
}

export default Portafolio