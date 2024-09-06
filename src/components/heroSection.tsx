import Section from "./section"
import styles from "./style/heroSection.module.css"

interface Content {
    hero_headline: string,
    hero_body: string,
}

type HeroSectionProps = {
    data: Content[]
}

const HeroSection: React.FC<HeroSectionProps> = ( {data} ) => {
    const { hero_headline, hero_body } = data[0]

    const Copytext: React.FC = async () => {
        return (
            <div className={styles.copytext}>
                <div className={styles.copytext_headline}>
                    <h1 className={styles.h1}>Zigzag&apos;s Infinity Team</h1>
                    <h2 className={styles.h2}>{hero_headline}</h2>
                </div>
                <div className={styles.copytext_body}>
                    {hero_body}
                    <div className={styles.cta}>
                        <a href="" className={styles.cta_link}>How? Click here for more information</a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Section sectionStyleClass={styles.section} containerStyleClass={styles.container} sectionHeadStyleClass="" sectionBodyStyleClass={styles.section_body} id="hero" headContent="" bodyContent={<Copytext />} />
    )
}

export default HeroSection