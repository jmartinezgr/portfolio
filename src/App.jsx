import { SpeedInsights } from '@vercel/speed-insights/react'
import { LanguageProvider } from './i18n/LanguageContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Breadth from './components/Breadth'
import Stack from './components/Stack'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
	return (
		<LanguageProvider>
			<Nav />
			<main>
				<Hero />
				<Work />
				<Breadth />
				<Stack />
				<Experience />
				<About />
				<Contact />
			</main>
			<Footer />
			<SpeedInsights />
		</LanguageProvider>
	)
}

export default App
