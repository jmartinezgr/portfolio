import '../styles/Curriculum.css'
import CurriculumSection from './Curriculum/CurriculumSection'

const Curriculum = () => {
    return (
        <div className="page">
            <h1 className="heading">Curriculum</h1>
            <div className="curriculum-page">
                <CurriculumSection sectionName="Cursos" />
                <CurriculumSection sectionName="Experiencia Academica" />
            </div>
        </div>
    )
}

export default Curriculum
