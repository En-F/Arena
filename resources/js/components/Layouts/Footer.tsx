import { Link } from '@inertiajs/react';
import React from 'react';
import '../../css/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Columna Izquierda: Newsletter */}
                <div className="footer-column">
                    <h4 className="footer-label">Cualquier duda</h4>
                    <div className="input-group-footer">
                        <input type="email" placeholder="Email..." />
                        <button className="btn-send">
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Columna Central Izquierda: Links 1 */}
                <div className="footer-column links-col">
                    <Link href="#">Centros y tarifas</Link>
                    <Link href="#">Actividades</Link>
                </div>

                {/* Columna Central: LOGO */}
                <div className="footer-column logo-col">
                    <img
                        src="/images/logo-centrofit.png"
                        alt="CentroFit Logo"
                        className="footer-logo-img"
                    />
                    <span className="footer-logo-text">CENTROFIT</span>
                </div>

                {/* Columna Central Derecha: Links 2 */}
                <div className="footer-column links-col">
                    <Link href="#">Cursos</Link>
                    <Link href="#">Horario</Link>
                </div>
            </div>

            {/* Fila Inferior: Redes Sociales */}
            <div className="footer-socials">
                <a href="#" className="social-icon ig">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-icon tk">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href="#" className="social-icon x">
                    <i className="fab fa-x-twitter"></i>
                </a>
                <a href="#" className="social-icon yt">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
