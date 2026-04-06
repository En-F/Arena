import React from 'react';
import { Head, Link } from '@inertiajs/react';
import '../Home/Home.css';
import CartaNoticia from '@/components/CartaNoticia';
import CartaActividad from '@/components/CartaActividad';
import { IoIosLogIn } from 'react-icons/io';
import { FiClipboard } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { FiSun, FiMoon } from 'react-icons/fi';
import Principal from '../Principal';

const CentrosyTarifas = () => {
    return (
        <div>
            <h1>Aquí irán las tarifas</h1>
        </div>
    );
};

CentrosyTarifas.layout = (page: React.ReactNode) => (
    <Principal children={page} />
);

export default CentrosyTarifas;
