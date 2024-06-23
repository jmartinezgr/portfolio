import { useEffect } from 'react'
import '../styles/Curriculum.css'
import CurriculumSection from './Curriculum/CurriculumSection'
import { experiencia } from "../assets/data/experiencia"
import { useLanguage } from "../hooks/useLanguage"

const sliderItems = [
    'django.png',
    'react.png',
    'node.png',
    'JavaScript.png',
    'express.png',
    'python.png',
    'TypeScript.png',
    'MySQL.png',
    'astro.png',    
    'html.png',
    'css.png',
    'java.png', 
]

const Curriculum = () => {

    const lang = useLanguage()
    const data = experiencia[lang]

    useEffect(() => {
        let copy = document.querySelector('.logos-slide').cloneNode(true)
        document.querySelector('.logos').appendChild(copy)
    }, [lang])

    return (
        <div className="page">
            <h1 className="heading">{data.title}</h1>
            <p className='me' dangerouslySetInnerHTML={ { __html: data.firstP }}/>
            {/* Slider section */}
            <section>
                <h2 className="curriculum-section-header">{lang === "es"? "Tecnologias": "Technology" }</h2>
                <p className='title' >{
                    lang === "es" ? 
                    "Echale un vistazo a las tecnologias que se usar"
                    : "Take a look at the technologies that will be used."
                }</p>
                <div className="mask-page">
                    <div className="logos">
                        <div className="logos-slide">
                            { 
                            sliderItems.map((item, index) => {
                                if(item === 'TypeScript.png') return <img key={index} src={"/sliders/"+item} alt={"/"+item} id='ts'/>
                                if(item === 'astro.png') return <img key={index} src={"/sliders/"+item} alt={"/"+item} id='astro'/>
                                if(item === 'html.png') return <img key={index} src={"/sliders/"+item} alt={"/"+item} id='html'/>
                                if(item === 'css.png') return <img key={index} src={"/sliders/"+item} alt={"/"+item} id='css'/>

                                return <img key={index} src={"/sliders/"+item} alt={"/"+item}/>
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section>
                {/* Curriculum section */}
                <h2 className="curriculum-section-header">{lang === 'es'?"Mi trayectoria": "My journey"}</h2>
                <p className='title' >
                    &quot; 
                    {lang === "es" 
                    ? "Los mejores desarrolladores de software son los que verdaderamente disfrutan mas con lo que hacen"
                    : "The best software developers are those who truly enjoy what they do the most."
                    } 
                    &quot;
                </p>
                <div className="curriculum-page">
                    <CurriculumSection sectionName="Cursos" />
                    <CurriculumSection sectionName="Experiencia Academica" />
                </div>
            </section>
        </div>
    )
}

export default Curriculum