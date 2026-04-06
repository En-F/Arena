// import { Head, Link } from '@inertiajs/react';
import React from 'react';
import '../Home/Home.css';
// import { FiClipboard } from 'react-icons/fi';
// import { FiSun, FiMoon } from 'react-icons/fi';
// import { GrLanguage } from 'react-icons/gr';
// import { IoIosLogIn } from 'react-icons/io';
// import CartaActividad from '@/components/CartaActividad';
// import CartaNoticia from '@/components/CartaNoticia';
import MainLayouts from '@/Layouts/MainLayout';

const CentrosyTarifas = () => {
    return (
        <div>
            <h1>Aquí irán las tarifas</h1>
        </div>
    );
};

CentrosyTarifas.layout = (page: React.ReactNode) => (
    <MainLayouts children={page} />
);

export default CentrosyTarifas;
