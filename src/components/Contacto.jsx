import { useLanguage } from '../hooks/useLanguage'
import '../styles/Contacto.css'
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

const translations = {
    "es": {
        "heading": "Contacto",
        "placeholderNombre": "Nombre",
        "placeholderApellido": "Apellido",
        "placeholderEmail": "Email",
        "placeholderMotivo": "Motivo de contacto",
        "submitValue": "Enviar"
    },
    "en": {
        "heading": "Contact",
        "placeholderNombre": "First Name",
        "placeholderApellido": "Last Name",
        "placeholderEmail": "Email",
        "placeholderMotivo": "Reason for contact",
        "submitValue": "Submit"
    }
}

const Contacto = () => {
    const lang = useLanguage(); // Obtener el idioma actual

    const translation = translations[lang];

    return (
        <div className="page">
            <h1 className="heading">{translation.heading}</h1>
            <form action="mailto:juan.martinez.desarollador@gmail.com" className="contact">
                <input type="text" placeholder={translation.placeholderNombre} />
                <input type="text" placeholder={translation.placeholderApellido} />
                <input type="text" placeholder={translation.placeholderEmail} />
                <textarea placeholder={translation.placeholderMotivo} />                
                <Button 
                    label={translation.submitValue} 
                    icon="pi pi-send"
                    iconPos="right" 
                    raised 
                    type="submit"
                    className='p-button-primary'
                />
            </form>
        </div>
    )
}

export default Contacto;
