import React from 'react';
import styles from './InputCard.module.css';
import Formal from './Formal';

const inputCard = props => {

    const copyHandler = e => {

        const textArea = document.createElement('TEXTAREA');
        document.querySelector('body').appendChild(textArea);


        switch(e.target.className) {
            case "InputCard_button__HKbob waveA":
                textArea.textContent = Formal[0];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob waveB":
                textArea.textContent = Formal[1];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob waveC":
                textArea.textContent = Formal[2];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;              
            case "InputCard_button__HKbob waveD":
                textArea.textContent = Formal[3];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break; 
            case "InputCard_button__HKbob waveE":
                textArea.textContent = Formal[4];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob waveF":
                textArea.textContent = Formal[5];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob modernA":
                textArea.textContent = Formal[6];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob modernB":
                textArea.textContent = Formal[7];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob modernC":
                textArea.textContent = Formal[8];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob modernD":
                textArea.textContent = Formal[9];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob modernE":
                textArea.textContent = Formal[10];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob popA":
                textArea.textContent = Formal[11];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob popB":
                textArea.textContent = Formal[12];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob popC":
                textArea.textContent = Formal[13];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob popD":
                textArea.textContent = Formal[14];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob popE":
                textArea.textContent = Formal[15];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob roundA":
                textArea.textContent = Formal[16];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob roundB":
                textArea.textContent = Formal[17];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob roundC":
                textArea.textContent = Formal[18];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob roundD":
                textArea.textContent = Formal[19];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob roundE":
                textArea.textContent = Formal[20];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob expandA":
                textArea.textContent = Formal[21];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob expandB":
                textArea.textContent = Formal[22];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob expandC":
                textArea.textContent = Formal[23];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob expandD":
                textArea.textContent = Formal[24];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
                break;
            case "InputCard_button__HKbob expandE":
                textArea.textContent = Formal[25];
                textArea.select();
                document.execCommand('copy');
                textArea.style.display = 'none';
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


