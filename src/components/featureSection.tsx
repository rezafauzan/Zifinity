import React from "react"
import Card from "./card"
import Section from "./section"
import styles from "./style/featureSection.module.css"

interface Content {
    feature_title: string,
    feature_description: string,
    feature_icon: string
}

type FeatureSectionProps = {
    data: Content[]
}
const FeatureSection: React.FC<FeatureSectionProps> = ({ data }) => {

    const FeatureList: React.FC = () => {
        let features: any = []
        data.forEach((e, index) => {
            const content = (
                <>
                    <h3>{e['feature_title']}</h3>
                    <p>{e['feature_description']}</p>
                </>
            )
            features.push(
                <li className={styles.feature_list_item} key={index}>
                    <Card cardStyleClass={styles.card} cardHeadStyleClass={styles.card_head} cardBodyStyleClass={styles.card_body} cardHeadImageStyleClass={styles.card_head_image} head_image={"/assets/img/drawable/" + e['feature_icon']} head_content={undefined} body_content={content} />
                </li>
            )
        })

        return (
            <ul className={styles.feature_list}>
                {features}
            </ul>
        )
    }

    return (<Section sectionStyleClass={styles.section} containerStyleClass={styles.container} sectionHeadStyleClass={styles.section_head} sectionBodyStyleClass={styles.section_body} id="feature" headContent={<h2>Our Service Benefit</h2>} bodyContent={<FeatureList />} />)
}

export default FeatureSection