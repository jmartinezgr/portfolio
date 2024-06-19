import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Inicio from '../components/Inicio';
import Portafolio from '../components/Portafolio';
import Servicios from '../components/Servicios';
import Curriculum from '../components/Curriculum';
import Contacto from '../components/Contacto';
import HeaderNav from '../components/layout/HeaderNav';
import Footer from '../components/layout/Footer';
import PageNotFound from '../components/PageNotFound';
import Proyecto from '../components/Proyectos/Proyecto';

const MisRutas = () => {    
    // Función para aplicar el estilo activo
    const activeStyle = (match) => {
        return match ? 'active' : '';
    };

    // Función para obtener el idioma del localStorage
    const lang = () => {
        return localStorage.getItem('lang') || 'es';
    };

    return (
        <BrowserRouter>
            {/* Header y Navegación */}
            <HeaderNav />

            {/* Contenido Principal */}
            <section className="content">
                <Routes>
                    {/* Redirección a la versión predeterminada del idioma */}
                    <Route
                        path="/"
                        element={<Navigate to={`/${lang()}/inicio`} />}
                        end
                    />

                    {/* Rutas con parámetro de idioma */}
                    <Route
                        path="/:lang/inicio"
                        element={<Inicio />}
                        className={activeStyle}
                    />
                    <Route
                        path="/:lang/portafolio"
                        element={<Portafolio />}
                        className={activeStyle}
                    />
                    <Route
                        path="/:lang/servicios"
                        element={<Servicios />}
                        className={activeStyle}
                    />
                    <Route
                        path="/:lang/curriculum"
                        element={<Curriculum />}
                        className={activeStyle}
                    />
                    <Route
                        path="/:lang/contacto"
                        element={<Contacto />}
                        className={activeStyle}
                    />
                    <Route
                        path="/:lang/proyecto/:id"
                        element={<Proyecto />}
                        className={activeStyle}
                    />

                    {/* Ruta específica para la página 404 por idioma */}
                    <Route path="/:lang/404" element={<PageNotFound />} />

                    {/* Ruta para Página No Encontrada */}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </section>

            {/* Footer */}
            <Footer />
        </BrowserRouter>
    );
};

export default MisRutas;
