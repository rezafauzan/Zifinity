import styles from "./style/resume.module.css"
import Section from "@/components/section"

type ResumeProps = {
    children: React.ReactNode
}

const Resume: React.FC<ResumeProps> = ({children}) => {
    return(
        <Section id={"resume"} sectionStyleClass={styles.section} containerStyleClass={styles.container} sectionHeadStyleClass={styles.sectionHead} sectionBodyStyleClass={styles.sectionBody} headContent={<h1>Reza Fauzan Adhima Resume</h1>} bodyContent={children}/>
    )
}

export default Resume