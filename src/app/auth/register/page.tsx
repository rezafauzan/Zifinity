import styles from "./page.module.css"
import PageWrapper from "@/components/pageWrapper"
import Main from "@/components/main"
import Section from "@/components/section"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
    const RegisterForm: React.FC = () => {
        return (
            <form className={styles.register_form} action="" method="post">
                <h1>{"This page still on progress"}</h1>
                <h2 className={styles.form_heading}>Wellcome</h2>
                <p className={styles.form_heading}>Please enter your details</p>

                <div className="row gap-1em">
                    <div className="col-6 d-flex-col">
                        <label htmlFor="first_name">First Name</label>
                        <input className={styles.form_input} type="text" name="first_name" id="first_name" placeholder="Example: Reza " />
                    </div>

                    <div className="col-6 d-flex-col">
                        <label htmlFor="last_name">Last Name</label>
                        <input className={styles.form_input} type="text" name="last_name" id="last_name" placeholder="Example: Fauzan Adhima" />
                    </div>
                </div>

                <label htmlFor="email">Email Address</label>
                <input className={styles.form_input} type="email" name="email" id="email" placeholder="Enter your Email Address" />

                <label htmlFor="phone">Phone Number</label>
                <input className={styles.form_input} type="tel" name="phone" id="phone" placeholder="Example: +6285659766175" pattern="[0-9]" />

                <label htmlFor="password">Password</label>
                <input className={styles.form_input} type="password" name="password" id="password" placeholder="********" />

                <button className={styles.form_submit} type="submit">Submit!</button>

                <p>Allready have account? <Link className={styles.cta_link} href="/auth">Log in Here!</Link></p>
            </form>
        )
    }

    return (
        <PageWrapper>
            <Main>
                <Section id={"auth_form"} sectionStyleClass={styles.section} containerStyleClass={styles.container} sectionHeadStyleClass={styles.section_head} sectionBodyStyleClass={styles.section_body} headContent={''} bodyContent={<RegisterForm />} />
            </Main>
            <Footer />
        </PageWrapper>
    )
}