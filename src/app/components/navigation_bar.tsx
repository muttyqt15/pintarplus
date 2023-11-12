import React from 'react';
import Link from 'next/link';
import '../globals.css';

function NavBar(props: any) {
    return (
        <div className="flex flex-col" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}>
            <nav className="w-full h-20 bg-white border-slate-300 flex items-center justify-between text-blue-600 font-bold ">
                <h2 className="text-2xl m-6">
                    PINTERPLUS
                </h2>
                <div className="text-2xl m-6 space-x-2">
                    <Link href={props.link1} className="nav-link">Home</Link>
                    <Link href={props.link2} className="nav-link">Courses</Link>
                    <Link href={props.link3} className="nav-link">Payment</Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;