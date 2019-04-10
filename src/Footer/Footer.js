import React from 'react';
import styles from './Footer.module.css';

const footer = () => {
    return (
        <div>
            <h5 className={styles.title}>Austin Beaufort - Formal Library - Copyright ©2019 </h5>
            <div className={styles.buttonContainer}>
                <a className={styles.link} rel="noopener noreferrer" href="https://medium.com/@austinbeaufort" target="_blank" ><button className={styles.button + ' ' + styles.button1}>Medium</button></a>
                <a className={styles.link} rel="noopener noreferrer" href="https://twitter.com/BeaufortAustin" target="_blank" ><button className={styles.button + ' ' + styles.button2}>Twitter</button></a>
                <a className={styles.link} rel="noopener noreferrer" href="https://github.com/austinbeaufort/" target="_blank" ><button className={styles.button + ' ' + styles.button3}>Github</button></a>
                <a className={styles.link} rel="noopener noreferrer" href="https://www.youtube.com/channel/UCUTKXJqFhBb4YlnkEQYIvQg" target="_blank" ><button className={styles.button + ' ' + styles.button4}>Youtube</button></a>
                <a className={styles.link} rel="noopener noreferrer" href="https://www.linkedin.com/in/austin-beaufort-948624179/" target="_blank" ><button className={styles.button + ' ' + styles.button5}>Linkedin</button></a>
            </div>
        </div>
    );
}

export default footer;