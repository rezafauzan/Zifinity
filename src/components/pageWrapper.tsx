import styles from "./style/pageWrapper.module.css"

type PageWrapperProps= {
    children: React.ReactNode
}

const PageWrapper: React.FC<PageWrapperProps> = ({children}) => {
    return(
        <div className={styles.page_wrapper}>{children}</div>
    )
}

export default PageWrapper