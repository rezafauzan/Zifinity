import styles from "./style/header.module.css"
import Utility from "@/components/utility"
import Navbar from "./navbar"

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Utility />
            <Navbar />
        </header>
    )
}

export default Header