import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/Email.css';

const Email = ({ alerta }) => {
	const [lang, setLang] = useState('es');

	useEffect(() => {
		const path = window.location.pathname;
		const language = path.split('/')[1];
		setLang(language);
	}, []);

	const handleClick = () => {
		navigator.clipboard.writeText('josemargri3@gmail.com').then(
			() => alerta((lang ==='en' ? 'Email copied to clipboard': 'Correo copiado al portapapeles'), 'success')
		).catch(
			() => alerta((lang==='en' ? 'Email not copied to clipboard': 'Ocurrion un error copiando el correo'), 'error')
		);
	}

	return (
		<div className="email">
			<p className="email-text" onClick={handleClick}>josemargri3@gmail.com</p>
			<div className="vertical-line"></div>
		</div>
	)
}

Email.propTypes = {
	alerta: PropTypes.func.isRequired
}

export default Email;
