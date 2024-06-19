// src/components/Email.js
import '../styles/Email.css';
import { alerta } from '../helpers/alerta';

const Email = () => {

	const handleClick = () => {
		navigator.clipboard.writeText('josemargri3@gmail.com').then(
			() => alerta('Email copied to clipboard','success')
		).catch(
			() => alerta('Email not copied to clipboard','error')
		)

	}

	return (
		<div className="email">
			<p className="email-text" onClick={handleClick}>josemargri3@gmail.com</p>
			<div className="vertical-line"></div>
		</div>
	)
}

export default Email;