import { FiMonitor, FiCode, FiSettings, FiLayers, FiBookOpen, FiGitMerge } from 'react-icons/fi' // Importar iconos desde react-icons
import '../styles/Servicios.css'

const Servicios = () => {
    return (
        <div className="page">
            <h1 className="heading">Servicios</h1>
            <section className="row">
                <article className="service">
                    <FiMonitor size={36} />
                    <h2>Diseño Web</h2>
                    <p>Diseño de sitios web atractivos y funcionales.</p>
                </article>
                <article className="service">
                    <FiCode size={36} />
                    <h2>Desarrollo Web</h2>
                    <p>Creación de aplicaciones web completas utilizando tecnologías como Django, Node.js con Express, React y Angular.</p>
                </article>
                <article className="service">
                    <FiSettings size={36} />
                    <h2>Automatización</h2>
                    <p>Implementación de procesos de automatización para mejorar la eficiencia en proyectos de software.</p>
                </article>
                <article className="service">
                    <FiLayers size={36} />
                    <h2>Estructuración de Proyectos</h2>
                    <p>Organización y estructuración de proyectos de software según las mejores prácticas.</p>
                </article>
                <article className="service">
                    <FiBookOpen size={36} />
                    <h2>Consultoría Técnica</h2>
                    <p>Asesoramiento técnico para optimizar el desarrollo y la arquitectura de aplicaciones web.</p>
                </article>
                <article className="service">
                    <FiGitMerge size={36} />
                    <h2>Metodologías Ágiles</h2>
                    <p>Implementación de metodologías ágiles como Scrum para la gestión eficiente de proyectos.</p>
                </article>
            </section>
        </div>
    )
}

export default Servicios;
