// src/components/ToggleButton.js
import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
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
        {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
    )
}

ToggleButton.propTypes = {
    handleColor: PropTypes.func.isRequired
}
export default ToggleButton
