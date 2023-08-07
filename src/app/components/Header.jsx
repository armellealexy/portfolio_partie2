"use client"
import  { useState } from 'react';
import  Link  from "next/link"

export default function Header() {
    // Variable State pour swcither l'etat du menu a temps voulu
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header className=" sm:flex sm:justify-between sm:items-center sm:px-4 py-3">

                <div className="flex justify-between px-4 items-center">

                    <Link href="/">
                        <p>Armelle</p>
                    </Link>

                    <button className="sm:hidden cursor-pointer bg-transparent active:border-0 " onClick={toggleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
                            {!isNavOpen ? (
                                <path
                                    d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                                />
                            ) : (
                                <path
                                    d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                                />
                            )}
                        </svg>
                    </button>

                </div>

                <nav className={`${isNavOpen ? 'block' : 'hidden'} pb-2 sm:flex `}>

                    <Link href="/" className="block text-indigo-900 text-base font-semibold sm:rounded-full sm:hover:bg-white sm:px-4 sm:py-4 hover:text-purple-600 mb-1">Acceuil</Link>
                    <Link href="/projet1" className="block text-indigo-900 text-base font-semibold sm:rounded-full sm:hover:bg-white sm:px-4 sm:py-4 hover:text-purple-600 mb-1">Projet 1</Link>
                    <Link href="/projet2" className="block text-indigo-900 text-base font-semibold sm:rounded-full sm:hover:bg-white sm:px-4 sm:py-4 hover:text-purple-600 mb-1">Projet 2</Link>
                    <Link href="/contact" className="block text-indigo-900 text-base font-semibold sm:rounded-full sm:hover:bg-white sm:px-4 sm:py-4 hover:text-purple-600 mb-1">Contact</Link>
                    <Link href="/reviews" className="block text-indigo-900 text-base font-semibold sm:rounded-full sm:hover:bg-white sm:px-4 sm:py-4 hover:text-purple-600 mb-1">Témoignages</Link>

                </nav>
            </header>
        </>
    );
}

