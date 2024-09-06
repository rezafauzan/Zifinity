import styles from "./style/loading.module.css"

const Loading: React.FC = () => {
    return(
        <div className={styles.loading}>
            <h4>Please Wait!</h4>
            <p>Gathering Data</p>
        </div>
    )
}

export default Loading