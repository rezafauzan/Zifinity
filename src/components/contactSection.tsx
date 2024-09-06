import Section from "./section"
import styles from "./style/contactSection.module.css"
import Image from "next/image"
import mailer from "nodemailer"
import fs from "fs"
import path from "path"

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
        subject: ''
    })

    function formInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function sendMail(e: React.FormEvent) {
        e.preventDefault()

        const transporter = mailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'zigzaginfinityteam@gmail.com',
                password: 'F2x445Rz1945'
            }
        })

        let mailOption = {
            from: formData.email,
            to: 'rezafauzan593@gmail.com',
            subject: formData.subject,
            text: formData.message
        }

        transporter.sendMail(
            mailOption,
            (error: any, info: any) => {
                if (error) {
                    const filePath = path.join(process.cwd(), 'emails', 'emails.txt')
                    const mailContent = "Email from ${formData.email} with subject ${formData.subject}, ${formData.message}"
                    fs.appendFile(filePath, mailContent,
                        (error) => {
                        console.log("Error Writing File :" + error)
                        }
                    )
                    mailOption = {
                        from: 'zigzaginfinityteam@gmail.com',
                        to: 'rezafauzan593@gmail.com',
                        subject: 'Contact Form Error',
                        text: 'A visitor sent a touch but fail, Errors: ' + error
                    }
                }
                alert('We have received your message. We will get back to you in hours or within a maximum of 3 days. System: ' + info);
            }
        )
    }

    const ContactForm: React.FC = () => {
        return (
            <form method="post" action='' className={styles.form} onSubmit={sendMail}>
                <input type="email" name="email" placeholder="Email Address" className={styles.input} onChange={formInputChange} />
                <input type="text" name="subject" placeholder="Subject" className={styles.input} onChange={formInputChange} />
                <textarea name="message" placeholder="Messages" className={styles.textarea} onChange={formInputChange}></textarea>
                <button type="submit" className={styles.button}>Sends!</button>
            </form>
        )
    }

    const ContactsList: React.FC = () => {
        return (
            <ul className={styles.contact_list}>
                <li className={styles.contact_list_item}>
                    <Image src="/assets/img/vendor/email.svg" alt="Email" width={40} height={40} />
                    <p>rezafauzan593@gmail.com</p>
                    <p>rezafauzan945@gmail.com</p>
                </li>
                <li className={styles.contact_list_item}>
                    <Image src="/assets/img/vendor/youtube_small_logo.svg" alt="Youtube" width={40} height={40} />
                    <div className={styles.youtube}>
                        <p>Learn a little from me</p>
                        <a href="https://youtube.com/@rezafauzanadhima" className={styles.contact_link}>Reza
                            Fauzan
                            Adhima</a>
                        <p>Let's have some fun</p>
                        <a href="https://youtube.com/@rezafauzanadhima" className={styles.contact_link}>Reza
                            Fauzan
                            Adhima</a>
                    </div>
                </li>
                <li className={styles.contact_list_item}>
                    <Image src="/assets/img/vendor/Telegram_logo.svg" alt="Telegram" width={40} height={40} />
                    <a href="https://telegram/@rezafauzanadhima" className={styles.contact_link}>@RezaFauzan1945</a>
                </li>
            </ul>
        )
    }

    const SocialMediaList: React.FC = () => {
        return (
            <ul className={styles.social_media_list}>
                <li className={styles.social_media_list_item}>
                    <a href="#" className={styles.social_media_link}>
                        <Image src="/assets/img/vendor/Facebook_logo.svg" alt="Facebook" width={40} height={40} />
                    </a>
                </li>
                <li className={styles.social_media_list_item}>
                    <a href="#" className={styles.social_media_link}>
                        <Image src="/assets/img/vendor/Instagram_logo_2016.svg" alt="Instagram" width={40} height={40} />
                    </a>
                </li>
                <li className={styles.social_media_list_item}>
                    <a href="#" className={styles.social_media_link}>
                        <Image src="/assets/img/vendor/Logo_of_Twitter.svg" alt="Twitter" width={40} height={40} />
                    </a>
                </li>
                <li className={styles.social_media_list_item}>
                    <a href="#" className={styles.social_media_link}>
                        <Image src="/assets/img/vendor/linkedin_small_logo.svg" alt="LinkedIn" width={40} height={40} />
                    </a>
                </li>
            </ul>
        )
    }

    const ContactContainer: React.FC = () => {
        return (
            <div className={styles.contact_container}>
                <ContactForm />
                <ContactsList />
                <SocialMediaList />
            </div>
        )
    }

    return (<Section sectionStyleClass={styles.section} containerStyleClass={styles.container} sectionHeadStyleClass={styles.section_head} sectionBodyStyleClass={styles.section_body} id="feature" headContent={<><h2>Get in touch</h2><p>Reach me out by fill this form i'll get in touch soon also check my social media below</p></>} bodyContent={<ContactContainer />} />)
}

export default ContactSection