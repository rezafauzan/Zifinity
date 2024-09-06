import Resume from "./resume"
import styles from "./style/rezaFauzanAdhimaResume.module.css"

const RezaFauzanAdhimaResume: React.FC = () => {
    return (
        <Resume>
            <ul className={styles.resume_details_list}>
                <li className={styles.resume_details_list_item} id="name">
                    <label htmlFor="name"><h2>Name : </h2></label>

                    <h3 id="name">Reza Fauzan Adhima</h3>
                </li>

                <li className={styles.resume_details_list_item} id="skills">
                    <label htmlFor="skills"><h2>Skills : </h2></label>

                    <ul className={styles.skills_list} id="skills">
                        <li className={styles.skills_list_item}><h3>Develop SEO Friendly, High Speed and Good Accessibility Static or Dynamic Website using vanila HTML, CSS, Javascript or using React library and NextJS Framework</h3></li>
                        <li className={styles.skills_list_item}><h3>Develop efficience and optimized REST Server with Laravel 11, Codeigniter, Quarkus, Springboots</h3></li>
                        <li className={styles.skills_list_item}><h3>Develop efficience decoupled architecture</h3></li>
                        <li className={styles.skills_list_item}><h3>Improve Website Security by implementing TOP 10 OWASP Security Framework</h3></li>
                        <li className={styles.skills_list_item}><h3>Improve SEO On Page, Performance, and Accessibility from a website</h3></li>
                        <li className={styles.skills_list_item}><h3>Convert From a Techstacks to another</h3></li>
                        <li className={styles.skills_list_item}><h3>Migrating old Techstacks to newer</h3></li>
                    </ul>
                </li>

                <li className={styles.resume_details_list_item + " " + styles.techstacks} id="techstacks">
                    <label htmlFor="techstacks"><h2>Techstacks I Can Use : </h2></label>

                    <ul className={styles.techstacks_list} id="techstacks">
                        <li className={styles.techstacks_list_item}>
                            <label htmlFor="frontend_techstacks">Frontend Techstacks</label>
                            <ul className={styles.frontend_techstacks_list} id="frontend_techstacks">
                                <li className={styles.frontend_techstacks_list}>HTML</li>
                                <li className={styles.frontend_techstacks_list}>CSS</li>
                                <li className={styles.frontend_techstacks_list}>Javascript</li>
                                <li className={styles.frontend_techstacks_list}>React</li>
                                <li className={styles.frontend_techstacks_list}>NextJS</li>
                                <li className={styles.frontend_techstacks_list}>Webpack</li>
                                <li className={styles.frontend_techstacks_list}>Vite</li>
                            </ul>
                        </li>

                        <li className={styles.techstacks_list_item}>
                            <label htmlFor="backend_techstacks">Backend Techstacks</label>
                            <ul className={styles.backend_techstacks_list} id="backend_techstacks">
                                <li className={styles.backend_techstacks_list}>PHP</li>
                                <li className={styles.backend_techstacks_list}>Java</li>
                                <li className={styles.backend_techstacks_list}>NodeJS</li>
                                <li className={styles.backend_techstacks_list}>Laravel</li>
                                <li className={styles.backend_techstacks_list}>Codeigniter</li>
                                <li className={styles.backend_techstacks_list}>Springboots</li>
                                <li className={styles.backend_techstacks_list}>Quarkus</li>
                                <li className={styles.backend_techstacks_list}>MySQL</li>
                                <li className={styles.backend_techstacks_list}>PostgreSQL</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </Resume>
    )
}

export default RezaFauzanAdhimaResume