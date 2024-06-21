import PropTypes from 'prop-types'

const SlideItem = ({item}) => {
    return (
        <>
            <div className="slide">
                <img src={`/sliders/${item}`} alt={`${item}`} />
            </div>
        </>
    )
}

SlideItem.propTypes = {
    item: PropTypes.string.isRequired
}

export default SlideItem