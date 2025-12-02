import type React from "react"
export interface NavLinkProps {
    href: string
    children: React.ReactNode
    active?: boolean
}

export interface NavDropdownProps {
    title: string,
    items: { name: string, href: string }[],
    active?: boolean
}