import React from 'react';
import styles from './Header.module.css';
import logo from '../images/logo.png';

const header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={logo} alt="tuxedo"></img>
            <h1 className={styles.title}>Formal</h1>
            <h3 className={styles.subTitle}>A "forms" Library</h3>
        </div>
    );
}

export default header;