import React from 'react';
import styles from './InputCard.module.css';

const inputCard = props => {
    return (
        <div className={styles.inputCard}>
            <h3>{props.title}</h3>
            <input type="text" />
            <button className={styles.button}>Copy Code</button>
        </div>
    );
}

export default inputCard;