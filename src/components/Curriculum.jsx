import '../styles/Curriculum.css'
import CurriculumSection from './Curriculum/CurriculumSection'

const Curriculum = () => {
    return (
        <div className="page">
            <h1 className="heading">Curriculum</h1>
            <div className="curriculum-page">
                
                <CurriculumSection sectionName="Cursos" />
                <CurriculumSection sectionName="Experiencia Academica" />

                {/*}
                <section className="curriculumSection">
                    <div className="curriculum-section-header">
                        <h2>Cursos y diplomados</h2>
                    </div>
                    <ol className="curriculumList">
                        <li className="curriculumItemList">
                            <div className="decorativeCircleList"></div>
                            <time dateTime="2023-05">Mayo 23</time>
                            <h3>Diseño de Interfaz de Usuario de aplicación Bootstrap5</h3>
                            <p>
                                Aprenderás a diseñar interfaces de usuario de aplicaciones web con Bootstrap 5.
                            </p>
                            <a href="#">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </a>
                        </li>
                        <li className="curriculumItemList">
                            <div className="decorativeCircleList"></div>
                            <time dateTime="2023-05">Mayo 23</time>
                            <h3>Diseño de Interfaz de Usuario de aplicación Bootstrap5</h3>
                            <p>
                                Aprenderás a diseñar interfaces de usuario de aplicaciones web con Bootstrap 5.
                            </p>
                            <a href="#">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </a>
                        </li>
                        <li className="curriculumItemList">
                            <div className="decorativeCircleList"></div>
                            <time dateTime="2023-05">Mayo 23</time>
                            <h3>Diseño de Interfaz de Usuario de aplicación Bootstrap5</h3>
                            <p>
                                Aprenderás a diseñar interfaces de usuario de aplicaciones web con Bootstrap 5.
                            </p>
                            <a href="#">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </a>
                        </li>
                    </ol>
                </section>
                <section className="curriculumSection">
                    <div className="curriculum-section-header">
                        <h2>Experiencia Academica</h2>
                    </div>
                    <ol className="curriculumList">
                        <li className="curriculumItemList">
                            <div className="decorativeCircleList"></div>
                            <time dateTime="2023-05">Mayo 23</time>
                            <h3>Diseño de Interfaz de Usuario de aplicación Bootstrap5</h3>
                            <p>
                                Aprenderás a diseñar interfaces de usuario de aplicaciones web con Bootstrap 5.
                            </p>
                            <a href="#">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </a>
                        </li>
                        <li className="curriculumItemList">
                            <div className="decorativeCircleList"></div>
                            <time dateTime="2023-05">Mayo 23</time>
                            <h3>Diseño de Interfaz de Usuario de aplicación Bootstrap5</h3>
                            <p>
                                Aprenderás a diseñar interfaces de usuario de aplicaciones web con Bootstrap 5.
                            </p>
                            <a href="#">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </a>
                        </li>
                        <li className="curriculumItemList">
                            <div className="decorativeCircleList"></div>
                            <time dateTime="2023-05">Mayo 23</time>
                            <h3>Diseño de Interfaz de Usuario de aplicación Bootstrap5</h3>
                            <p>
                                Aprenderás a diseñar interfaces de usuario de aplicaciones web con Bootstrap 5.
                            </p>
                            <a href="#">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </a>
                        </li>
                    </ol>
                </section>*/}
            </div>
        </div>
    )
}

export default Curriculum
