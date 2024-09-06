'use client'
import styles from "./style/navbar.module.css"
import { useState } from "react"
import Link from "next/link"

const Navbar: React.FC = () => {
    const [navbarState, setNavbarState] = useState(false)

    const NavbarToggler: React.FC = () => {
        function toggleNavbar() {
            setNavbarState(navbarState => !navbarState)
        }

        return (
            <button className={styles.navbar_toggler + " " + (navbarState ? styles.navbar_toggler_show : '')} aria-label="Navbar Toggler" onClick={toggleNavbar}>
                <span className={styles.navbar_toggler_span}></span>
                <span className={styles.navbar_toggler_span}></span>
                <span className={styles.navbar_toggler_span}></span>
            </button>
        )
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.brand}>
                <a href="#" className={styles.brand_link}>Zifinity ∞</a>
            </div>

            <ul role="list" className={( styles.nav_list + " " + (navbarState ? styles.nav_list_show : '') )}>
                <li className={styles.nav_list_item}>
                    <a href="#" className={styles.nav_link}>Product</a>
                </li>
                <li className={styles.nav_list_item}>
                    <a href="#" className={styles.nav_link}>Portfolio</a>
                </li>
                <li className={styles.nav_list_item}>
                    <a href="#" className={styles.nav_link}>Services</a>
                </li>
                <li className={styles.nav_list_item}>
                    <a href="#" className={styles.nav_link}>About</a>
                </li>
                <li className={styles.nav_list_item}>
                    <a href="#" className={styles.nav_link}>Contact</a>
                </li>
            </ul>

            <div className={styles.cta}>
                <Link href="/auth" className={styles.cta_button}>Member Login!</Link>
            </div >

            <NavbarToggler />

        </nav>
    )
}

export default Navbar