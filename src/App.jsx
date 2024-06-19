// src/App.js
import MisRutas from './routers/MisRutas'
import SocialIcons from './components/SocialIcons';
import Email from './components/Email';
import { useEffect } from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'       


function App() {

    useEffect(() => {
		// Añadir el idioma al localStorage
		console.log(localStorage.getItem('lang'));
        if(localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'es');
        }
		// Añadir el modo oscuro al localStorage
		if(localStorage.getItem('darkMode') === null) {
			localStorage.setItem('darkMode', false);
		}
		console.log(localStorage.getItem('lang'));
    }, []);

	return (
		<>
			<SocialIcons />
			<MisRutas />
			<Email />
		</>
	)
}

export default App;