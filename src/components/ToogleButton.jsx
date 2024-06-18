// src/components/ToggleButton.js
import React from 'react'
import { MdSunny } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";
import '../styles/ToggleButton.css'
import PropTypes from 'prop-types'

const ToggleButton = ({ handleColor }) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    const toggleMode = () => {
        handleColor()
        setIsDarkMode(!isDarkMode)
    }

    return (
        <button className="toggle-button" onClick={toggleMode}>
        {isDarkMode ? <MdSunny size={"30px"} /> : <BsMoonStarsFill size={"30px"} />}
        </button>
    )
}

ToggleButton.propTypes = {
    handleColor: PropTypes.func.isRequired
}

export default ToggleButton