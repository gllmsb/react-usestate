import { useState } from "react"
import styles from './button-clicker.module.scss'


export const ButtonClicker = () => {

    const [count, setCount] = useState(0);
    const handleClick = () => setCount(prevCount => prevCount + 1);

    return (
        <div className={styles.container}>
            <p className={styles.text}>You have clicked the button {count} times.</p>
            <button className={styles.button} onClick={handleClick}>Click me</button>
        </div>
    )
}