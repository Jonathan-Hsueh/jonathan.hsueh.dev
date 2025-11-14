"use client";

import {useState} from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname()
    const navLinks = [
        { href: '/', label: 'Home'},
        { href: '/projects', label: 'More Projects'},
        { href: '/blog', label: 'Blog'},
    ]

    return (
        <div
        className={`
            fixed top-10 right-10 z-100
            `}
        >
            {navLinks.map(({ href, label }) => (
                <Link
                key={href}
                href={href}
                className={`
                    relative px-3 py-2 text-m font-medium transition-all duration-300
                     text-gray-700 text-transform: uppercase
                    hover:text-lg drop-shadow-lg
                `}
                style={{
                    fontFamily: 'Impact, "Franklin Gothic Bold", "Helvetica Black", sans-serif',
                    fontStretch: 'condensed'
                  }}
                >
                {label}
    
                {pathname === href && ( 
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-sky-950 rounded-full"/>
                )}
                </Link>
            ))}

        </div>
    );
};

export default Navbar;