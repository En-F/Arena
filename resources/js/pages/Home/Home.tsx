import React from 'react';
import { Head, Link } from '@inertiajs/react';
import '../Home/Home.css';
import CartaNoticia from '@/components/CartaNoticia';
import CartaActividad from '@/components/CartaActividad';

export default function Home() {
    return (
        <div className="main-container">
            <Head title="CentroFit - Inicio" />

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="nav-content">
                    <div className="logo">CENTROFIT</div>
                    <div className="nav-links">
                        <Link href="#">Cursos y tarifas</Link>
                        <Link href="#">Actividades</Link>
                        <Link href="#">Centro</Link>
                        <Link href="#">Horario</Link>
                    </div>
                    <div className="nav-icons">
                        <span className="icon">🛒</span>
                        <span className="icon">👤</span>
                    </div>
                </div>
            </nav>

            {/* SECCIÓN CENTROS */}
            <section className="section-centros">
                <h2 className="title-green">Descubre nuestros centros</h2>
                <div className="grid-centros">
                    <div className="img-card-circle">
                        <Link href="#">
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

            {/* SECCIÓN NOTICIAS */}
            <section className="section-noticias">
                <h2 className="title-green">Noticias</h2>
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

            {/* BANNER INSCRIPCIÓN */}
            <section className="banner-cta">
                <div className="banner-content">
                    <div className="banner-image">
                        <img src="/images/trainers.jpg" alt="Entrenadores" />
                    </div>
                    <div className="banner-text-box">
                        <h3>Inscríbete y disfruta de nuestros servicios</h3>
                        <p>
                            ¿A qué esperas más? Empieza a disfrutar de
                            beneficios únicos desde el primer día.
                        </p>
                        <button className="btn-inscripcion">INSCRIBETE</button>
                    </div>
                </div>
            </section>

            {/* SECCIÓN ACTIVIDADES */}
            <section className="section-actividades">
                <h2 className="title-green">Actividades</h2>
                <div className="activities-grid">
                    <Link>
                        <CartaActividad
                            title="Baloncesto"
                            img="/images/actividades/baloncesto.jpg"
                        />
                    </Link>
                    <Link>
                        <CartaActividad
                            title="Natación"
                            img="/images/actividades/natacion.jpg"
                        />
                    </Link>
                    <Link>
                        <CartaActividad
                            title="Ciclismo"
                            img="/images/actividades/ciclismo.jpg"
                        />
                    </Link>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-top-image"></div>
                <div className="footer-content">
                    <div className="footer-col">
                        <p>Cualquier duda</p>
                        <div className="input-group">
                            <input type="text" placeholder="Email..." />
                            <button>→</button>
                        </div>
                    </div>
                    <div className="footer-links">
                        <Link href="#">Centros y tarifas</Link>
                        <Link href="#">Actividades</Link>
                    </div>
                    <div className="footer-logo">CENTROFIT</div>
                    <div className="footer-socials">
                        {/* Iconos simulados */}
                        <span>📸</span> <span>🎵</span> <span>🐦</span>{' '}
                        <span>📺</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
