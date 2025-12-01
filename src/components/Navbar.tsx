'use client'

import { NavLinkProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from "lucide-react";
import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathName = usePathname();

    // function to determine is current path is active
    const isActive = (path: string): boolean => {
        return pathName === path;
    }

    return (
        <header className='bg-white sticky top-0 z-50'>
            <div className='container mx-auto px-6 md:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <Link href="/">
                        <Image
                            src="/generic-company-logo.png"
                            width={180}
                            height={50}
                            alt='company-logo'
                            className=" w-10 object-contain"
                            priority
                        />
                    </Link>
                    <nav className='hidden md:flex itmes-center space-x-1'>
                        <NavLink
                            href='/' active={isActive("/")}>
                            HOME
                        </NavLink>
                        <NavLink
                            href='/about' active={isActive("/about")}>
                            ABOUT
                        </NavLink>
                        <NavLink
                            href='/services' active={isActive("/services")}>
                            SERVICES
                        </NavLink>
                        <NavLink
                            href='/clients' active={isActive("/clients")}>
                            CLIENTS
                        </NavLink>
                        <NavLink
                            href='/galarry' active={isActive("/gallary")}>
                            GALLARY
                        </NavLink>
                        <NavLink
                            href='/profile' active={isActive("/profile")}>
                            PROFILE
                        </NavLink>
                        <NavLink
                            href='/services' active={isActive("/services")}>
                            SERVICES
                        </NavLink>
                        <NavLink
                            href='/our-business' active={isActive("/our-business")}>
                            OUR BUSINESS
                        </NavLink>
                        <NavLink
                            href='/our-terms' active={isActive("/our-terms")}>
                            OUR TEAMS
                        </NavLink>
                        <NavLink
                            href='/contact' active={isActive("/contact")}>
                            CONTACT
                        </NavLink>
                    </nav>

                    {/* mobile menu button */}
                    <button
                        className='md:hidden p-2'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* mobile screen */}
            {isMenuOpen && (
                <div className='md:hidden bg-white border-t absolute top-16 z-50 w-full'>
                    <div className='container mx-auto p-4'>
                        <nav className='flex flex-col space-y-4'>
                            <NavLink
                                href='/' 
                                active={isActive("/")}
                                onClick={()=> setIsMenuOpen(false)}
                                >
                                HOME
                            </NavLink>
                            <NavLink
                                href='/about' 
                                active={isActive("/about")}
                                onClick={()=> setIsMenuOpen(false)}
                                >
                                ABOUT
                            </NavLink>
                            <NavLink
                                href='/services' active={isActive("/services")}>
                                SERVICES
                            </NavLink>
                            <NavLink
                                href='/clients' active={isActive("/clients")}>
                                CLIENTS
                            </NavLink>
                            <NavLink
                                href='/galarry' active={isActive("/gallary")}>
                                GALLARY
                            </NavLink>
                            <NavLink
                                href='/profile' active={isActive("/profile")}>
                                PROFILE
                            </NavLink>
                            <NavLink
                                href='/services' active={isActive("/services")}>
                                SERVICES
                            </NavLink>
                            <NavLink
                                href='/our-business' active={isActive("/our-business")}>
                                OUR BUSINESS
                            </NavLink>
                            <NavLink
                                href='/our-terms' active={isActive("/our-terms")}>
                                OUR TEAMS
                            </NavLink>
                            <NavLink
                                href='/contact' active={isActive("/contact")}>
                                CONTACT
                            </NavLink>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}

// navlink custom link component
function NavLink({
    href,
    children,
    active = false,
    onClick
}: NavLinkProps & { onClick?: () => void }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`px-3 py-2 text-sm
            ${active ? "text-violet-900" : "text-gray-700 "} hover:text-violet-400 hover:text-lg duration-300`}>
            {children}
        </Link >
    )
}
