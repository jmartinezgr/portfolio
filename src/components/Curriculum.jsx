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
                <h2 className="curriculum-section-header">Tecnologias</h2>
                <p className='title' > Echale un vistazo a las tecnologias que se usar </p>
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
                <h2 className="curriculum-section-header">Mi trayectoria</h2>
                <p className='title' >&quot; Los mejores desarrolladores de software son los que verdaderamente disfrutan mas con lo que hacen &quot;</p>
                <div className="curriculum-page">
                    <CurriculumSection sectionName="Cursos" />
                    <CurriculumSection sectionName="Experiencia Academica" />
                </div>
            </section>
        </div>
    )
}

export default Curriculum