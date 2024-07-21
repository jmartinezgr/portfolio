import { useEffect, useState, useRef } from 'react'
import MisRutas from './routers/MisRutas'
import SocialIcons from './components/SocialIcons'
import Email from './components/Email'
import Alerta from './components/Alerta'
import Queue from 'queue-fifo'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Animation from './components/layout/Animation'

function App() {
	const queueRef = useRef(new Queue())
	const [alerta, setAlerta] = useState(null)
	const [animationDisplayed, setAnimationDisplayed] = useState(false)
	const [animated, setAnimated] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('lang') === null) localStorage.setItem('lang', 'es')
		if (localStorage.getItem('darkMode') === null) localStorage.setItem('darkMode', false)
	}, [])

	useEffect(() => {
		if (animated) {
			setTimeout(() => {
				setAnimated(true)
			}, 5000)
		}
	}, [animated])

	useEffect(() => {
		const processQueue = () => {
			if (!queueRef.current.isEmpty() && !alerta) {
				const nextAlert = queueRef.current.dequeue()
				setAlerta(nextAlert)
			}
		}

		const interval = setInterval(processQueue, 500)

		return () => clearInterval(interval);
	}, [alerta])

	const showAlert = (mensaje, tipo) => {
		queueRef.current.enqueue({ mensaje, tipo })
	}

	return (
		<>
			{!animationDisplayed && (
				<Animation setAnimation={setAnimated} setAnimationDisplayed={setAnimationDisplayed} />
			)}

			{alerta && <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} onClose={() => setAlerta(null)} />}
			<SocialIcons />
			<MisRutas />
			<Email alerta={showAlert} />

			<SpeedInsights />
		</>
	)
}

export default App
