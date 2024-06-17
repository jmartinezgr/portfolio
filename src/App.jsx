import MisRutas from './routers/MisRutas'

function App() {

	if(true){
		document.documentElement.style.setProperty('--background-color', '#222D89')
		document.documentElement.style.setProperty('--text-pcolor', '#FFFFFF')
		document.documentElement.style.setProperty('--text-scolor', '#ddd')
		document.documentElement.style.setProperty('--primary-color', '#4183FF')
	}

	return (
		<>
			<MisRutas />
		</>
	)
}

export default App