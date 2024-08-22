import { useState } from 'react';
import styles from './greetings.module.scss';



export const GreetingInput = () => {
    
    const [name, setName] = useState('');
    const handleChange = (e) => setName(e.target.value);

    return(
        <div className={styles.container}>
            <p className={styles.text}>Send a greeting to {name}</p>
            <input 
            type="text"
            placeholder="Enter a name"
            value={name}
            onChange={handleChange}
            className={styles.input}
            />
        </div>
    )
}