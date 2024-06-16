import '../styles/Contacto.css'

const Contacto = () => {
    return (
        <div className="page">
            <h1 className="heading">Contacto</h1>
            <form action="mailto:juan.martinez.desarollador@gmail.com" className="contact">
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Apellido"/>
                <input type="text" placeholder="Email"/>
                <textarea placeholder="Motivo de contacto"/>                
                <input type="submit" value="Enviar"/>
            </form>
        </div>
    )
}

export default Contacto