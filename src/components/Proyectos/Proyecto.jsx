import { useParams } from "react-router-dom"
import { trabajos } from '../../assets/data/trabajos'
import { useEffect } from "react"
import { useState } from "react"
import '../../styles/Proyecto.css'

const Proyecto = () => {
    const [trabajo, setTrabajo] = useState({})
    const params = useParams()

    useEffect(() => {
        const data = trabajos["en"]
        let trabajo = data.find(trabajo => trabajo.id === params.id)

        if(!trabajo) {
            window.location.href = "/404"
            return
        }

        setTrabajo(trabajo)
    },[params.id])

    return (
        <div className="page page-work">
            <div className="mask">
                <img src={"/src/assets/images/"+trabajo.id+".png"} alt={trabajo.nombre}/>
            </div>
            <h1 className="heading">Proyecto {trabajo.nombre} </h1>
            <p>{trabajo.tecnologias && trabajo.tecnologias.join(', ')}</p>
            <p>{trabajo.desc}</p>
            <a href={trabajo.url} target="_blank">Ir al proyecto</a>
        </div>
    )
}

export default Proyecto