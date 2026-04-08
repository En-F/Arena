import { Head, Link } from '@inertiajs/react';
import React from 'react';
import '@/css/home.css';
// import { FiClipboard } from 'react-icons/fi';
// import { FiSun, FiMoon } from 'react-icons/fi';
// import { GrLanguage } from 'react-icons/gr';
// import { IoIosLogIn } from 'react-icons/io';
import CartaActividad from '@/components/CartaActividad';
import CartaNoticia from '@/components/CartaNoticia';
import MainLayouts from '@/Layouts/MainLayout';

export default function Home() {
    return (
        <>
            <Head title="Arena - Tu Centro Fitness" />

            {/* --- SECCIÓN CENTROS --- */}
            <section className="section-centros">
                <h2 className="title-black">Descubre nuestros centros</h2>
                <div className="grid-centros">
                    <div className="img-card-circle">
                        <Link href={'#'}>
                            <img src="/images/centros/piscina_sanlucar.jpg" />
                        </Link>
                    </div>
                    <div className="img-card-circle">
                        <Link href="#">
                            <img src="/images/centros/car_sierranevada.jpg" />
                        </Link>
                    </div>
                    <div className="img-card-circle">
                        <Link href="#">
                            <img src="/images/centros/atletismo.jpg" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN NOTICIAS --- */}
            <section className="section-noticias">
                <h2 className="title-black">Noticias</h2>
                <div className="noticia-container">
                    <button className="arrow">←</button>
                    <div className="news-grid">
                        <CartaNoticia
                            date="Fecha"
                            text="La nadadora española Mireia Belmonte..."
                        />
                        <CartaNoticia
                            date="Fecha"
                            text="Los Titanes del Sol ganan su séptimo..."
                        />
                        <CartaNoticia
                            date="Fecha"
                            text="El Atlético de Madrid ficha..."
                        />
                    </div>
                    <button className="arrow">→</button>
                </div>
            </section>

            {/* --- SECCIÓN BANNER--- */}
            <section className="banner-cta">
                <div className="banner-content">
                    <div className="banner-image">
                        <img
                            src="/images/entrenador/entrenador.jpg"
                            alt="Entrenadores"
                        />
                    </div>
                    <div className="banner-text-box">
                        <h3>Inscríbete y disfruta de nuestros servicios</h3>
                        <p>
                            ¿A qué esperas más? Empieza a disfrutar de
                            beneficios únicos desde el primer día.
                        </p>
                        <button className="btn-inscripcion">
                            ¡Inscríbete ya!
                        </button>
                    </div>
                </div>
            </section>

            {/* --- SECCIÓN ACTIVIDADES --- */}
            <section className="section-actividades">
                <h2 className="title-black">Actividades</h2>
                <div className="activities-grid">
                    <CartaActividad
                        title="Ciclismo"
                        imagen="/images/actividades/ciclismo.jpg"
                    />
                    <CartaActividad
                        title="Natación"
                        imagen="/images/actividades/natacion.jpg"
                    />
                    <CartaActividad
                        title="Baloncesto"
                        imagen="/images/actividades/baloncesto.jpg"
                    />
                </div>
            </section>
        </>
    );
}

Home.layout = (page) => <MainLayouts children={page} />;
