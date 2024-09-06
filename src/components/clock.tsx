"use client"
import styles from "./style/clock.module.css"
import { useEffect, useState } from "react"

const Clock: React.FC = () => {
    const [time, setTime] = useState<Date | null>(null)

    useEffect(() => {
        const updateTime = () => {
            const time = new Date()
            setTime(time)
        }

        const syncTime = setInterval(() => { updateTime() }, 1000);

        return () => clearInterval(syncTime)
    }, [])


    if (!time) {
        return (
            <div className={styles.clock}>
                <p>My country local time ⌚</p>
                <span>Loading...</span>
            </div>
        )
    }

    return (
        <div className={styles.clock}>
            <p>My country local time ⌚</p>
            <div className="time">
                <span>{(time.getHours() < 10 ? '0' : '') + (time.getHours() > 12 ? time.getHours() - 12 : time.getHours())}</span>
                <span>:</span>
                <span>{(time.getMinutes() < 10 ? '0' : '') + time.getMinutes()}</span>
                <span>:</span>
                <span>{(time.getSeconds() < 10 ? '0' : '') + time.getSeconds()}</span>
                <span>{(time.getHours() < 12 ? ' AM ' : ' PM ')}</span>
            </div>
        </div>
    )
}

export default Clock