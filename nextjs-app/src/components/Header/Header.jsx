'use client'

import Container from '../Container/Container'
import styles from './header.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import departmentLogo from '../../../public/departmentLogo.png'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const Left = () => {
    return (
        <Link href="/" className={styles.link}>
            <div className={styles.left}>
                <Image
                    src={departmentLogo}
                    width={80}
                    height={80}
                    alt="Department Logo"
                />
                <h1 className={styles.title}>
                    Кафедра агроінформаційних технологій Бориславського лісового
                    університету
                </h1>
            </div>
        </Link>
    )
}

const Bar = () => {
    // TODO: Check color and size
    return (
        <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M6 24H42M6 12H42M6 36H42"
                stroke="#fce76c"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    )
}

const NavLink = ({ children, href }) => {
    const pathname = usePathname()

    const isActive = (href) => {
        return pathname === href
    }

    return (
        <Link
            href={href}
            className={
                isActive(href) ? styles.navBarLinkActive : styles.navBarLink
            }
        >
            {children}
        </Link>
    )
}

const AuthButton = ({ href, style, children }) => {
    return (
        <button type="button" className={style}>
            <Link href={href} className={styles.link}>
                {children}
            </Link>
        </button>
    )
}

const links = [
    { href: '/', name: 'Головна' },
    { href: '/team', name: 'Про кафедру' },
    { href: '/science', name: 'Наукова робота' },
    { href: '/news', name: 'Новини' },
    { href: '/contacts', name: 'Контакти' },
]

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {links.map((link) => (
                    <li className={styles.navItem} key={link.name}>
                        <NavLink key={link.href} href={link.href}>
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <AuthButton href="/" style={styles.loginBtn}>
                Вхід
            </AuthButton>
        </nav>
    )
}

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef = useRef(null)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const menu = menuRef.current
        if (menu) {
            if (isOpen) {
                menu.style.display = 'block'
                setTimeout(() => {
                    if (menu) {
                        menu.classList.add(styles.open)
                    }
                }, 10)
            } else {
                menu.classList.remove(styles.open)
                setTimeout(() => {
                    if (menu) {
                        menu.style.display = 'none'
                    }
                }, 700)
            }
        }
    }, [isOpen])

    return (
        <div className={styles.hamburgerMenuContainer}>
            <button className={styles.hamburgerButton} onClick={toggleMenu}>
                <Bar />
            </button>
            {isOpen && (
                <>
                    <div ref={menuRef} className={styles.hamburgerMenu}>
                        <ul className={styles.hamburgerNavList}>
                            {links.map((link) => (
                                <li className={styles.navItem} key={link.href}>
                                    <NavLink href={link.href}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li className={styles.navItem}>
                                <AuthButton href="/" style={styles.loginBtn}>
                                    Вхід
                                </AuthButton>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={styles.accessibility}
                        onClick={toggleMenu}
                    ></div>
                </>
            )}
        </div>
    )
}

export default function Header() {
    return (
        <header className={styles.header}>
            <Container>
                <div className={styles.wrapper}>
                    <Left />
                    <div className={styles.desktopNavigation}>
                        <Navigation />
                    </div>
                    <div className={styles.mobileNavigation}>
                        <HamburgerMenu />
                    </div>
                </div>
            </Container>
        </header>
    )
}
