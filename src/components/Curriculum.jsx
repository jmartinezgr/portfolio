import { useEffect } from 'react'
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

    useEffect(() => {
        let copy = document.querySelector('.logos-slide').cloneNode(true)
        document.querySelector('.logos').appendChild(copy)
    }, [])


    return (
        <div className="page">
            <h1 className="heading">Curriculum</h1>
            <div className="mask-page">
                <div className="logos">
                    <div className="logos-slide">
                        { 
                            sliderItems.map((item, index) => {
                               
                                if(item === 'TypeScript.png') return <img key={index} src={"/sliders/"+item} alt={"/"+item} id='ts'/>
                                if(item === 'astro.png') return <img key={index} src={"/sliders/"+item} alt={"/"+item} id='astro'/>
                                if(item === 'html.png') return <img key={index} src={"/sliders/"+item} alt={"/"+item} id='html'/>
                               
                                return <img key={index} src={"/sliders/"+item} alt={"/"+item}/>
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Curriculum section */}
            <div className="curriculum-page">
                <CurriculumSection sectionName="Cursos" />
                <CurriculumSection sectionName="Experiencia Academica" />
            </div>
        </div>
    )
}

export default Curriculum