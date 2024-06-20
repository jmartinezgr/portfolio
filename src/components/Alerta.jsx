import { useEffect, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import '../styles/Alert.css';
import PropTypes from 'prop-types';

const Alerta = ({ mensaje, tipo, onClose }) => {

	const [lang, setLang] = useState('es');

	useEffect(() => {
		const path = window.location.pathname;
		const language = path.split('/')[1];
		setLang(language);

		if(tipo === 'success') document.documentElement.style.setProperty('--color', 'var(--primary-color)');
		if(tipo === 'error') document.documentElement.style.setProperty('--color', 'red');

	}, [tipo]);

	useEffect(() => {
		const toastElement = document.querySelector('.toast');
		const progressElement = document.querySelector('.progress');

		// Añadir las clases de entrada
		setTimeout(() => {
		toastElement.classList.add('active');
		progressElement.classList.add('active');
		}, 10);

		// Quitar las clases de entrada y añadir las clases de salida
		const timer = setTimeout(() => {
			toastElement.classList.remove('active');
			setTimeout(() => progressElement.classList.remove('active'), 300);

			// Esperar a que la animación de salida termine antes de llamar a onClose
			setTimeout(onClose, 300);
		}, 2000);

		// Limpiar el temporizador si el componente se desmonta
		return () => clearTimeout(timer);
	}, [onClose]);

	const handleClick = () => {
		const toastElement = document.querySelector('.toast');
		const progressElement = document.querySelector('.progress');

		toastElement.classList.remove('active');
		progressElement.classList.remove('active');

		setTimeout(onClose, 300);
	};

	return (
		<div className={`toast`}>
			<div className="toast-content">
			{tipo === 'success' && <FaCheck className="check" />}
			{tipo === 'error' && <MdCancel className="cancel" />}
			<div className="message">
				<span className="text text-1">{
					tipo === 'success' ? (lang === 'en' ? 'Success': 'Exito') : 'Error'
				}</span>
				<span className="text text-2">{mensaje}</span>
			</div>
			</div>
			<MdCancel className="close" onClick={handleClick}/>
			<div className="progress"></div>
		</div>
	);
};

Alerta.propTypes = {
	mensaje: PropTypes.string.isRequired,
	tipo: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default Alerta;