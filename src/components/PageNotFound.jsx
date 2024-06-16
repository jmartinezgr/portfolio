// Filename - 404Page.js

import { Link } from 'react-router-dom';
import '../styles/404Page.css';

const PageNotFound = () => {
	return (
		<div className="page not-found-page">
			<h1 className="heading">404 Error</h1>
			<h2>Pagina no encontrada</h2>
			<p>Lo lamentamos, pero la pagina que buscabas no fue encontrada.</p>
			<Link to="/" className="home-link">Ir al inicio</Link>
		</div>
	);
}

export default PageNotFound;
