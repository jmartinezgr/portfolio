import { Link } from 'react-router-dom'
import '../styles/Inicio.css'
import ListadoProyectos from './Proyectos/ListadoProyectos'

const Inicio = () => {
    return (
        <div className="home">
            <h1>
                Hola, soy Juan José Martinez y soy Desarrollador Web en Colombia,
                y ofrezco mis servicios de <strong>programación y diseño</strong> de todo tipo de 
                proyectos web y procesos de <strong> automatización</strong> de tareas. 
            </h1>
            <h2 className='title' >
                Te ayudo a crear tu sitio o aplicación web, tener más visibilidad
                y relevancia en internet y a mejorar la eficiencia de tus procesos.
                <Link to="/contacto">Contacta conmigo</Link>
            </h2>
            <section className="works">
                <h2 className="heading">Algunos de mis proyectos</h2>
                <p>Estos son algunos de mis trabajos de desarollo web</p>
                <ListadoProyectos limite={2}/>
            </section>
        </div>
    )
}

export default Inicio