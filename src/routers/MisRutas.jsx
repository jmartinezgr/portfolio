import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Inicio from '../components/Inicio'
import Portafolio from '../components/Portafolio'
import Servicios from '../components/Servicios'
import Curriculum from '../components/Curriculum'
import Contacto from '../components/Contacto'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'
import PageNotFound from '../components/PageNotFound'
import Proyecto from '../components/Proyectos/Proyecto'

const MisRutas = () => {

    const activeStyle = (element) => {
        return element.isActive ? 'active' : ""
    }

    return (
        <BrowserRouter>
            {/* Header y Navegacion */}
            <HeaderNav />

            {/* Contenido Principal */}
            <section className="content">
                <Routes>
                    {/* Redirección a la versión predeterminada del idioma */}
                    <Route path="/" element={<Navigate to="/es/inicio" />} end />
                    
                    {/* Rutas con parámetro de idioma */}
                    <Route path="/:lang/inicio" className={activeStyle} element={<Inicio />} />
                    <Route path="/:lang/portafolio" className={activeStyle} element={<Portafolio />} />
                    <Route path="/:lang/servicios" className={activeStyle} element={<Servicios />} />
                    <Route path="/:lang/curriculum" className={activeStyle} element={<Curriculum />} />
                    <Route path="/:lang/contacto" className={activeStyle} element={<Contacto />} />
                    <Route path="/:lang/proyecto/:id" className={activeStyle} element={<Proyecto />} />
                    
                    {/* Ruta para Página No Encontrada */}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </section>

            {/* Footer */}
            <Footer />
        </BrowserRouter>
    )
}

export default MisRutas
