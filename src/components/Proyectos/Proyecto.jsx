import { useParams, Navigate } from "react-router-dom";
import { trabajos } from '../../assets/data/trabajos';
import { useEffect, useState } from "react";
import { Button } from 'primereact/button';
import '../../styles/Proyecto.css';

const Proyecto = () => {
    const [trabajo, setTrabajo] = useState(null); // Inicialmente null
    const params = useParams();
    const [notFound, setNotFound] = useState(false); // Estado para manejar 404

    useEffect(() => {
        const data = trabajos[params.lang];
        const trabajo = data.find(trabajo => trabajo.id === params.id);

        if (!trabajo) {
            setNotFound(true); // Si no se encuentra, establece notFound a true
        } else {
            setTrabajo(trabajo);
        }
    }, [params.id, params.lang]);

    if (notFound) {
        return <Navigate to={`/${params.lang}/404`} />; // Redirige a la página 404
    }

    if (!trabajo) {
        return <div>Loading...</div>; // Muestra un mensaje de carga mientras se obtiene el trabajo
    }

    return (
        <div className="page page-work">
            <div className="mask">
                <img src={`/src/assets/images/${trabajo.id}.png`} alt={trabajo.nombre} />
            </div>
            <h1 className="heading">Proyecto {trabajo.nombre}</h1>
            <p>{trabajo.tecnologias && trabajo.tecnologias.join(', ')}</p>
            <p>{trabajo.desc}</p>
            <div className="buttons">
                {trabajo.url && (
                    <a href={trabajo.url} target="_blank" rel="noopener noreferrer">
                    <Button label={params.lang === 'es' ? 'Ver Demo' : 'View Demo'} 
                        icon="pi pi-external-link" 
                        iconPos="right" 
                        className="p-button-primary"
                        raised/>
                    </a>
                )}
                {trabajo.github && (
                    <a href={trabajo.github} target="_blank" rel="noopener noreferrer">
                        <Button icon="pi pi-github" 
                            className="p-button-secondary" 
                            raised/>
                    </a>
                )}
            </div>
        </div>
    );
};

export default Proyecto;
