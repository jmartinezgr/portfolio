import SlideItem from './SlideItem'
import '../styles/Curriculum.css'
import CurriculumSection from './Curriculum/CurriculumSection'

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
    return (
        <div className="page">
            <h1 className="heading">Curriculum</h1>
            <div className='slider'>
                <div className="slide-track">
                    {
                        // Mapeamos los items dos veces para crear el efecto de bucle continuo
                        [...sliderItems, ...sliderItems].map((item, index) => {
                            return <SlideItem key={index} item={item} />
                        })
                    }
                </div>
            </div>
            <div className="curriculum-page">
                <CurriculumSection sectionName="Cursos" />
                <CurriculumSection sectionName="Experiencia Academica" />
            </div>
        </div>
    )
}

export default Curriculum
