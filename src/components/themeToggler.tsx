'use client'
import styles from "./style/themeToggler.module.css"
import { useState } from "react"

const ThemeToggler: React.FC = () => {
    const [themeState, setTheme] = useState('dark')

    function toggleTheme(){
        setTheme( (themeState === 'dark' ? 'light' : 'dark') )
    }

    return (
        <div className={styles.theme_toggler}>
            <button onClick={toggleTheme} className={styles.theme_toggler_button} aria-label="Theme Toggler">{(themeState === 'dark' ?'🌙':'☀')}</button>
        </div>
    )
}

export default ThemeToggler