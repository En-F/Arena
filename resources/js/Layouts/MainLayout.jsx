// resources/js/Layouts/MainLayout.jsx
import React from 'react';
import { Link } from '@inertiajs/react';
import { FiClipboard } from 'react-icons/fi';
import { IoIosLogIn } from 'react-icons/io';
import Navbar from '@/components/Layouts/Navbar';
import Footer from '@/components/Layouts/Footer';
import '@/css/mainlayouts.css';

export default function MainLayout({ children }) {
    return (
        <div className="main-container">
            {/* --- NAVBAR PERMANENTE --- */}
            <Navbar />

            <main className="flex-grow pt-10">{children}</main>

            <Footer />
        </div>
    );
}
