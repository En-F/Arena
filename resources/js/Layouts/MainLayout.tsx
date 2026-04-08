// resources/js/Layouts/MainLayout.jsx
import React, { ReactNode } from 'react';
import { Link } from '@inertiajs/react';
import { FiClipboard } from 'react-icons/fi';
import { IoIosLogIn } from 'react-icons/io';
import Navbar from '@/components/Layouts/Navbar';
import Footer from '@/components/Layouts/Footer';
import '@/css/mainlayouts.css';

interface Props {
    children: React.ReactNode;
    title?: string;
    description?: string;
}

export default function MainLayout({ children, title, description }: Props) {
    return (
        <div className="main-container">
            {/* --- NAVBAR PERMANENTE --- */}
            <Navbar />

            <main className="flex-grow pt-10">
                {title && <h1 className="text-2xl font-bold">{title}</h1>}

                {children}
            </main>

            <Footer />
        </div>
    );
}
