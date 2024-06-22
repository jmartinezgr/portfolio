import { experiencia } from "../../assets/data/experiencia"
import CurriculumItem from "./CurriculumItem"
import PropTypes from 'prop-types'
import { useLanguage } from "../../hooks/useLanguage"

const CurriculumSection = ({sectionName}) => {

    const lang = useLanguage()

    const data = experiencia[lang][sectionName]

    return (
        <section className="curriculumSection">
            <div className="curriculum-section-header" >
                <h2 id={sectionName}>{data.title}</h2>
            </div>
            <ol className="curriculumList">
                {data.items.map((item, index) => (CurriculumItem({item, index})))}
            </ol>
        </section>
    )
}

CurriculumSection.propTypes = {
    sectionName: PropTypes.string.isRequired
}   

export default CurriculumSection