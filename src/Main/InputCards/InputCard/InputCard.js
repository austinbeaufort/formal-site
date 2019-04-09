import React from 'react';
import styles from './InputCard.module.css';
import Formal from './Formal';

const inputCard = props => {

    const copyHandler = e => {
        let copyText;

        switch(e.target.className) {
            case "InputCard_button__HKbob waveA":
                copyText = Formal[0];
                console.log(copyText);
                break;          

            default:
            console.log('error');
        }        
    }

    return (
        <div className={styles.inputCard}>
            <h3>{props.title}</h3>
            <input type="text" />
            <button onClick={copyHandler} className={styles.button + ' ' + props.index}>Copy Code</button>
        </div>
    );
}



export default inputCard;


