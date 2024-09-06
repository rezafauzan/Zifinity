import styles from "./style/footer.module.css"

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footer_nav}>
                <div className={styles.copyright}>
                    Copyright MIT License © 2024 Reza Fauzan Adhima & Infinity Team. All Rights Reserved
                </div>

                <ul className={styles.nav_list}>
                    <li className={styles.nav_list_item}>
                        <a href="#" className={styles.nav_link}>Terms & Co.</a>
                    </li>

                    <li className={styles.nav_list_item}>
                        <a href="#" className={styles.nav_link}>Contact</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer