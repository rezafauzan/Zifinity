import styles from "./style/utility.module.css"
import Clock from "@/components/clock"
import ThemeToggler from "./themeToggler"

const Utility: React.FC = () => {
  return (
    <div className={styles.utility}>
      <Clock />
      <ThemeToggler />
    </div>
  )
}

export default Utility
