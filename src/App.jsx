// src/App.js
import MisRutas from './routers/MisRutas'
import SocialIcons from './components/SocialIcons';
import Email from './components/Email';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'       


function App() {
	return (
		<>
			<SocialIcons />
			<MisRutas />
			<Email />
		</>
	)
}

export default App;