"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        if (isOpen) {
            toggleMenu();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`${inter.className} h-[12%] fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-darkblue text-white' : 'bg-transparent text-black'}`}>
            
            <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
                <div className="font-bold font-josefinsans">
                    <Link href="#home">
                        <Image
                            src="/images/sportlogo.png"
                            alt="Logo"
                            width={190}
                            height={74}
                            className="w-[100px] h-[auto] md:w-[150px] lg:w-[150px] lg:h-[100px] xl:w-[250px] mx-3 lg:mx-5 xl:mx-6"
                        />
                    </Link>
                </div>

                {!isOpen && (
                    <div className="block lg:hidden xl:hidden">
                        <button onClick={toggleMenu} aria-label="Open navigation" className={`${isScrolled ? 'text-white' : 'text-black'}`}>
                            <FaBars size={30} />
                        </button>
                    </div>
                )}

                <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
                    <li className="font-bold text-[20px]">
                        <Link
                            href="#home"
                            onClick={() => handleLinkClick('#home')}
                            className={`${activeLink === '#home' ? 'text-green-500' : 'text-white'} hover:text-green-700`}
                        >
                            HOME
                        </Link>
                    </li>
                    <li className="font-bold text-[20px]">
                        <Link
                            href="#academies"
                            onClick={() => handleLinkClick('#academies')}
                            className={`${activeLink === '#academies' ? 'text-green-500' : 'text-white'} hover:text-green-700`}
                        >
                            ACADEMIES
                        </Link>
                    </li>
                    <li className="font-bold text-[20px]">
                        <Link
                            href="#services"
                            onClick={() => handleLinkClick('#services')}
                            className={`${activeLink === '#services' ? 'text-green-500' : 'text-white'} hover:text-green-700`}
                        >
                            SERVICES
                        </Link>
                    </li>
                    <li className="font-bold text-[20px]">
                        <Link
                            href="#team"
                            onClick={() => handleLinkClick('#team')}
                            className={`${activeLink === '#team' ? 'text-green-500' : 'text-white'} hover:text-green-700`}
                        >
                            TEAM
                        </Link>
                    </li>
                    <li className="font-bold text-[20px]">
                        <Link
                            href="#contacts"
                            onClick={() => handleLinkClick('#contacts')}
                            className={`${activeLink === '#contacts' ? 'text-green-500' : 'text-white'} hover:text-green-700`}
                        >
                            CONTACTS
                        </Link>
                    </li>
                </ul>

                {isOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
                        <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
                            <li className="font-bold text-[20px]">
                                <Link
                                    href="#home"
                                    onClick={() => handleLinkClick('#home')}
                                    className={`${activeLink === '#home' ? 'text-green-500' : 'text-black'} hover:text-gray-700`}
                                >
                                    HOME
                                </Link>
                            </li>
                            <li className="font-bold text-[20px]">
                                <Link
                                    href="#academies"
                                    onClick={() => handleLinkClick('#academies')}
                                    className={`${activeLink === '#academies' ? 'text-green-500' : 'text-black'} hover:text-gray-700`}
                                >
                                    ACADEMIES
                                </Link>
                            </li>
                            <li className="font-bold text-[20px]">
                                <Link
                                    href="#services"
                                    onClick={() => handleLinkClick('#services')}
                                    className={`${activeLink === '#services' ? 'text-green-500' : 'text-black'} hover:text-gray-700`}
                                >
                                    SERVICES
                                </Link>
                            </li>
                            <li className="font-bold text-[20px]">
                                <Link
                                    href="#team"
                                    onClick={() => handleLinkClick('#team')}
                                    className={`${activeLink === '#team' ? 'text-green-500' : 'text-black'} hover:text-gray-700`}
                                >
                                    TEAM
                                </Link>
                            </li>
                            <li className="font-bold text-[20px]">
                                <Link
                                    href="#contacts"
                                    onClick={() => handleLinkClick('#contacts')}
                                    className={`${activeLink === '#contacts' ? 'text-green-500' : 'text-black'} hover:text-gray-700`}
                                >
                                    CONTACTS
                                </Link>
                            </li>
                        </ul>
                        <button className="absolute top-4 right-4 z-50" onClick={toggleMenu} aria-label="Close navigation">
                            <FaTimes size={30} />
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
