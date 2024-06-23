import { useLanguage } from '../hooks/useLanguage'
import '../styles/Portafolio.css'
import ListadoProyectos from './Proyectos/ListadoProyectos'

const Portafolio = () => {
    
    const lang = useLanguage()
    
    return (
        <div className="page">
            <h1 className="heading">{lang === "es"? "Portafolio": "Portfolio"}</h1>
            <ListadoProyectos/>
        </div>
    )
}

export default Portafolio