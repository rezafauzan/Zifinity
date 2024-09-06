import Section from "./section"
import Image from 'next/image'
import styles from "./style/aboutSection.module.css"
import profilePicture from "../../public/assets/img/me/profile.jpg"
import Link from "next/link"

interface Content {
    about_headline: string,
    about_content: [],
    about_picture: string
}

type AboutSectionProps = {
    data: Content[]
}

const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
    const { about_headline, about_content, about_picture } = data[0]

    const Myself: React.FC = () => {
        return (
            <>
                <div className={styles.me}>
                    <h3>{about_headline}</h3>

                    <div dangerouslySetInnerHTML={{__html: about_content}}>

                    </div>

                    <div className={styles.cta}>
                        <p>More about me on my <Link href="/resume" className={styles.cta_link}>resume here &gt;</Link></p>
                    </div>
                </div>

                <div className={styles.picture_of_me}>
                    <div className={styles.picture_frame}>
                        <Image className={styles.profile_picture} src="/assets/img/me/profile-square.jpg" alt="Reza Fauzan Adhima's Portrait" width={239} height={239} quality={90}/>
                    </div>
                </div>
            </>
        )
    }
    return (<Section sectionStyleClass={styles.section} containerStyleClass={styles.container} sectionHeadStyleClass="" sectionBodyStyleClass={styles.section_body} id="about" headContent={<h2>Let me introduce myself</h2>} bodyContent={<Myself />} />)
}

export default AboutSection