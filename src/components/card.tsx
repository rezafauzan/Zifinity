import Image from "next/image"
import styles from "./style/card.module.css"

type CardProps = {
    cardStyleClass: string,
    cardHeadStyleClass: string,
    cardBodyStyleClass: string,
    cardHeadImageStyleClass: string,
    head_image: string,
    head_content: React.ReactNode,
    body_content: React.ReactNode
}

const Card: React.FC<CardProps> = ({cardStyleClass = '', cardHeadStyleClass = '', cardHeadImageStyleClass = '', cardBodyStyleClass = '', head_image = undefined, head_content = undefined, body_content = undefined}) => {
    return(
        <div className={styles.card + " " + cardStyleClass}>
            <div className={styles.card_head + " " + cardHeadStyleClass}>
                {(head_image ? <Image src={head_image} className={styles.card_head_image + " " + cardHeadImageStyleClass} alt={head_image} width={160} height={160} /> : '')}
                {head_content}
            </div>
            <div className={styles.card_body + " " + cardBodyStyleClass}>
                {body_content}
            </div>
        </div>
    )
}

export default Card