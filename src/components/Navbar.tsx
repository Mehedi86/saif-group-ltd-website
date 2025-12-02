'use client'

import { NavDropdownProps, NavLinkProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from "lucide-react";
import { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const companies = [
    { name: "Munia Overseas (RL-2452)", href: "/companies/munia-overseas" },
    {
        name: "MSTC Training center",
        href: "/companies/singapore-technical-training-centre",
    },
    {
        name: "Monir Air Tours & Travels",
        href: "/companies/monir-air-tours-travels",
    },
    { name: "Ms Construction", href: "/companies/ms-construction" },
    { name: "Singapore Housing Ltd", href: "/companies/singapore-housing-ltd" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isCompaniesOpen, setIsCompaniesOpen] = useState(false)
    const pathName = usePathname();

    // function to determine is current path is active
    const isActive = (path: string): boolean => {
        return pathName === path;
    }

    const isCompanyActive = () => {
        return pathName?.startsWith("/companies/");
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
                        <NavDropdown
                            title="OUR BUSINESS"
                            active={isCompanyActive()}
                            items={companies}
                        />
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
                                onClick={() => setIsMenuOpen(false)}
                            >
                                HOME
                            </NavLink>
                            <NavLink
                                href='/about'
                                active={isActive("/about")}
                                onClick={() => setIsMenuOpen(false)}
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

                            {/* dropdown section for our business */}
                            <div>
                                <button
                                    onClick={() => setIsCompaniesOpen
                                        (!isCompaniesOpen)}
                                    className='flex gap-4 items-center px-3 py-2 text-sm text-gray-700'
                                >
                                    <span>OUR BUSINESS</span>
                                    {isCompaniesOpen ?
                                        <IoIosArrowDown />
                                        :
                                        <IoIosArrowUp />}
                                </button>

                                {/* collapsible links */}
                                {isCompaniesOpen &&
                                    <div className='pl-4 mt-1 border-l-2 space-y-2 border-gray-200 flex flex-col'>
                                        {companies.map(company => <NavLink
                                            key={company.href}
                                            href={company.href}
                                            active={isActive(company.href)}
                                            onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                            {company.name}
                                        </NavLink>)}
                                    </div>}
                            </div>

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
            className={`px-3 py-2 text-sm font-semiboldz
            ${active ? "text-violet-900" : "text-gray-700 "} hover:text-violet-600`}>
            {children}
        </Link >
    )
}

// navlink dropdown custom component
function NavDropdown({ title, items, active = false }: NavDropdownProps) {
    return (
        <div className='bg-white'>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className={`px-3 py-2 text-sm cursor-pointer
                        ${active ? "text-violet-900" : "text-gray-700 "} hover:text-violet-600`}>
                        {title}
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel>
                     */}
                    {items.map(item => <DropdownMenuItem asChild
                        key={item.href}>
                        <Link href={item.href} className='w-full py-2 px-3 text-base hover:text- cursor-pointer'>
                            {item.name}
                        </Link>
                    </DropdownMenuItem>)}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
