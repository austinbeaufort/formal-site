import React from 'react';
import InputCard from './InputCard/InputCard';
import styles from './InputCards.module.css';

const inputCards = props => {

    return (
        <div className={styles.cardsContainer}>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveA}>
                <InputCard index='waveA' title='class="input wave waveA"' />
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveB}>
                <InputCard index='waveB' title='class="input wave waveB"'/>
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveC}>
                <InputCard index='waveC' title='class="input wave waveC"'/>
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveD}>
                <InputCard index='waveD' title='class="input wave waveD"'/>
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveE}>
                <InputCard index='waveE' title='class="input wave waveE"'/>
            </div>
            <div className={styles.input + ' ' + styles.wave + ' ' + styles.waveF}>
                <InputCard index='waveF' title='class="input wave waveF"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernA}>
                <InputCard index='modernA' title='class="input modern modernA"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernB}>
                <InputCard index='modernB' title='class="input modern modernB"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernC}>
                <InputCard index='modernC' title='class="input modern modernC"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernD}>
                <InputCard index='modernD' title='class="input modern modernD"'/>
            </div>
            <div className={styles.input + ' ' + styles.modern + ' ' + styles.modernE}>
                <InputCard index='modernE' title='class="input modern modernE"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popA}>
                <InputCard index='popA' title='class="input pop popA"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popB}>
                <InputCard index='popB' title='class="input pop popB"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popC}>
                <InputCard index='popC' title='class="input pop popC"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popD}>
                <InputCard index='popD' title='class="input pop popD"'/>
            </div>
            <div className={styles.input + ' ' + styles.pop + ' ' + styles.popE}>
                <InputCard index='popE' title='class="input pop popE"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundA}>
                <InputCard index='roundA' title='class="input round roundA"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundB}>
                <InputCard index='roundB' title='class="input round roundB"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundC}>
                <InputCard index='roundC' title='class="input round roundC"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundD}>
                <InputCard index='roundD' title='class="input round roundD"'/>
            </div>
            <div className={styles.input + ' ' + styles.round + ' ' + styles.roundE}>
                <InputCard index='roundE' title='class="input round roundE"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandA}>
                <InputCard index='expandA' title='class="input expand expandA"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandB}>
                <InputCard index='expandB' title='class="input expand expandB"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandC}>
                <InputCard index='expandC' title='class="input expand expandC"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandD}>
                <InputCard index='expandD' title='class="input expand expandD"'/>
            </div>
            <div className={styles.input + ' ' + styles.expand + ' ' + styles.expandE}>
                <InputCard index='expandE' title='class="input expand expandE"'/>
            </div>
        </div>

    );
}

export default inputCards;