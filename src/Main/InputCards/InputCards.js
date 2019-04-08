import React from 'react';
import InputCard from './InputCard/InputCard';
import styles from './InputCards.module.css';

const inputCards = props => {
    return (
        <div class={styles.cardsContainer}>
            <InputCard/>
            <InputCard/>
            <InputCard/>
        </div>

    );
}

export default inputCards;