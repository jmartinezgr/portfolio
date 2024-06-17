// src/App.js
import MisRutas from './routers/MisRutas'
import ToggleButton from './components/ToogleButton'

const handleColor = () => {
  var estilo = window.getComputedStyle(document.body)
  var colorDeFondo = estilo.backgroundColor

	if (colorDeFondo === 'rgb(245, 245, 245)') {
		document.documentElement.style.setProperty('--background-color', '#111b22')
		document.documentElement.style.setProperty('--text-pcolor', '#fcfdfd')
		document.documentElement.style.setProperty('--text-scolor', '#ddd')
		document.documentElement.style.setProperty('--primary-color', '#007aff')
		document.documentElement.style.setProperty('--secondary-color', '#FFA500')
	} else {
		document.documentElement.style.setProperty('--background-color', '#f5f5f5')
		document.documentElement.style.setProperty('--text-pcolor', '#000')
		document.documentElement.style.setProperty('--text-scolor', '#333')
		document.documentElement.style.setProperty('--primary-color', '#007aff')
		document.documentElement.style.setProperty('--secondary-color', '#FFA500')
	}
}

function App() {
	return (
		<>
			<MisRutas />
			<ToggleButton handleColor={handleColor} />
		</>
	)
}

export default App;
