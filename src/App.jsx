import { useEffect, useState, useRef } from 'react';
import MisRutas from './routers/MisRutas';
import SocialIcons from './components/SocialIcons';
import Email from './components/Email';
import Alerta from './components/Alerta';
import Queue from 'queue-fifo';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { SpeedInsights } from '@vercel/speed-insights/react';
	
function App() {
	const queueRef = useRef(new Queue());
	const [alerta, setAlerta] = useState(null);

	useEffect(() => {
		if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'es'); 
		if (localStorage.getItem('darkMode') === null)  localStorage.setItem('darkMode', false); 
	}, []);

	useEffect(() => {
		const processQueue = () => {
			if (!queueRef.current.isEmpty() && !alerta) {
				const nextAlert = queueRef.current.dequeue();
				setAlerta(nextAlert);
			}
		};

		const interval = setInterval(processQueue, 500); 

		return () => clearInterval(interval);
	}, [alerta]);

	const showAlert = (mensaje, tipo) => {
		queueRef.current.enqueue({ mensaje, tipo });
	};

	return (
		<>
			{alerta && <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} onClose={() => setAlerta(null)} />}
			<SocialIcons />
			<MisRutas />
			<Email alerta={showAlert} />
			{/* Elemento para medir el rendimiento en vercel*/}
			<SpeedInsights />
		</>
	);
}

export default App;
