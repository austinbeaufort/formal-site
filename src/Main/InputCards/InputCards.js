import React from 'react';
import InputCard from './InputCard/InputCard';
import styles from './InputCards.module.css';

const inputCards = props => {

    return (
        <div className={styles.cardsContainer}>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveA}>
                <InputCard title='class="input wave waveA"' />
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveB}>
                <InputCard title='class="input wave waveB"'/>
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveC}>
                <InputCard title='class="input wave waveC"'/>
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveD}>
                <InputCard title='class="input wave waveD"'/>
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveE}>
                <InputCard title='class="input wave waveE"'/>
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveF}>
                <InputCard title='class="input wave waveF"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernA}>
                <InputCard title='class="input modern modernA"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernB}>
                <InputCard title='class="input modern modernB"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernC}>
                <InputCard title='class="input modern modernC"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernD}>
                <InputCard title='class="input modern modernD"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernE}>
                <InputCard title='class="input modern modernE"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popA}>
                <InputCard title='class="input pop popA"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popB}>
                <InputCard title='class="input pop popB"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popC}>
                <InputCard title='class="input pop popC"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popD}>
                <InputCard title='class="input pop popD"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popE}>
                <InputCard title='class="input pop popE"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundA}>
                <InputCard title='class="input round roundA"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundB}>
                <InputCard title='class="input round roundB"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundC}>
                <InputCard title='class="input round roundC"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundD}>
                <InputCard title='class="input round roundD"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundE}>
                <InputCard title='class="input round roundE"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandA}>
                <InputCard title='class="input expand expandA"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandB}>
                <InputCard title='class="input expand expandB"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandC}>
                <InputCard title='class="input expand expandC"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandD}>
                <InputCard title='class="input expand expandD"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandE}>
                <InputCard title='class="input expand expandE"'/>
            </div>
        </div>

    );
}

export default inputCards;