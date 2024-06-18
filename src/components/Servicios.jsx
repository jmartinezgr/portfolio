import { useLanguage } from '../hooks/useLanguage';
import { FiMonitor, FiCode, FiSettings, FiLayers, FiBookOpen, FiGitMerge, FiDatabase, FiCloud } from 'react-icons/fi'; 
import '../styles/Servicios.css';
import { servicios } from '../assets/data/servicios';

const iconMap = {
    FiMonitor: <FiMonitor size={36} />,
    FiCode: <FiCode size={36} />,
    FiSettings: <FiSettings size={36} />,
    FiLayers: <FiLayers size={36} />,
    FiBookOpen: <FiBookOpen size={36} />,
    FiGitMerge: <FiGitMerge size={36} />,
    FiDatabase: <FiDatabase size={36} />,
    FiCloud: <FiCloud size={36} />
};

const Servicios = () => {
    const lang = useLanguage();
    const data = servicios[lang];

    return (
        <div className="page">
            <h1 className="heading">Servicios</h1>
            <section className="row">
                {data.map((service, index) => (
                    <article className="service" key={index}>
                        {iconMap[service.icon]}
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </article>
                ))}
            </section>
        </div>
    );
}

export default Servicios;
