import styles from "./style/section.module.css"

type sectionProps = {
    id: string,
    sectionStyleClass: string,
    containerStyleClass: string,
    sectionHeadStyleClass: string,
    sectionBodyStyleClass: string,
    headContent: string | React.ReactNode | null,
    bodyContent: string | React.ReactNode | null
}

const Section: React.FC<sectionProps> = ({ id, sectionStyleClass, containerStyleClass, sectionHeadStyleClass, sectionBodyStyleClass, headContent = 'headContent', bodyContent = 'bodyContent' }) => {
    return (
        <section className={styles.section + (sectionStyleClass ? " " + sectionStyleClass : '')} id={id}>
            <div className={styles.container + (containerStyleClass ? " " + containerStyleClass : '')}>
                {(id === 'hero' ? '' : <div className={styles.section_head + (sectionHeadStyleClass ? " " + sectionHeadStyleClass : '')}>{headContent}</div>)}
                <div className={styles.section_body + (sectionBodyStyleClass ? " " + sectionBodyStyleClass : '')}>{bodyContent}</div>
            </div>
        </section>
    )
}

export default Section