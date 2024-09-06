import styles from "./style/main.module.css"

type MainProps = {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = async ({children}) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}

export default Main