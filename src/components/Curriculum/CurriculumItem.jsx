import PropTypes from 'prop-types'
import { Button } from 'primereact/button'
import { useLanguage } from '../../hooks/useLanguage'

const CurriculumItem = ({item,index}) => {
   
    const lang = useLanguage()
   
    return (
        <li className="curriculumItemList" key={index}>
            <div className="decorativeCircleList"></div>
            <time>{item.date}</time>
            <h3>{item.title}</h3>
            <p>
                {item.description}
            </p>

            {(item.url && 
                <a href={item.url} target='_black'>
                    <Button label={(lang === 'es' ? "Ver Certificado" : 'View Degree')} 
                        icon="pi pi-arrow-right" 
                        iconPos="right" 
                        className="p-button-primary"
                        raised/>
                </a>
            )}
        </li>
    )
}

CurriculumItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
}


export default CurriculumItem