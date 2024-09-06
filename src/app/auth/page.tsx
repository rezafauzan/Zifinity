import styles from "./page.module.css"
import PageWrapper from "@/components/pageWrapper"
import Main from "@/components/main"
import Section from "@/components/section"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  const LoginForm: React.FC = () => {
    return (
      <form className={styles.login_form} action="" method="post">
        <h1>{"This page still on progress"}</h1>
        <h2 className={styles.form_heading}>Wellcome Back</h2>
        <p className={styles.form_heading}>Please enter your details</p>

        <label htmlFor="username">Username</label>
        <input className={styles.form_input} type="text" name="username" id="username" placeholder="Enter your username" />

        <label htmlFor="password">Password</label>
        <input className={styles.form_input} type="password" name="password" id="password" placeholder="********" />

        <button className={styles.form_submit} type="submit">Log In!</button>

        <p>Don&apos;t have an account? <Link className={styles.cta_button} href="/auth/register">Register Here!</Link></p>
      </form>
    )
  }

  return (
    <PageWrapper>
      <Main>
        <Section id={"auth_form"} sectionStyleClass={styles.section} containerStyleClass={styles.container} sectionHeadStyleClass={styles.section_head} sectionBodyStyleClass={styles.section_body} headContent={''} bodyContent={<LoginForm />} />
      </Main>
      <Footer />
    </PageWrapper>
  )
}