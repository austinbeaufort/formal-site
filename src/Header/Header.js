import React, { Component } from 'react';
import styles from './Header.module.css';
import logo from '../images/logo.png';
import Modal from 'react-responsive-modal';

class Header extends Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;  
        return (
            <div className={styles.container}>
                <img className={styles.img} src={logo} alt="tuxedo"></img>
                <h1 className={styles.title}>Formal</h1>
                <h3 className={styles.subTitle}>A "forms" Library</h3>
                <div onClick={this.onOpenModal} className={styles.menu}>
                    <div className={styles.burger}></div>
                    <div className={styles.burger}></div>
                    <div className={styles.burger}></div>
                </div>
                <ul className={styles.ul}>
                    <a className={styles.a} href="/"><li className={styles.li}>NPM</li></a>
                    <a className={styles.a} href="/"><li className={styles.li}>Download</li></a>
                    <a className={styles.a} href="/"><li className={styles.li}>Github Repo</li></a>
                    <a className={styles.a} href="/"><li className={styles.li}>Let's Talk!</li></a>
                </ul>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <ul className={styles.modalUL}>
                        <a className={styles.modalA} href="/"><li className={styles.modalLI + ' ' + styles.modalLIOdd}>Download</li></a>
                        <a className={styles.modalA} href="/"><li className={styles.modalLI}>NPM</li></a>
                        <a className={styles.modalA} href="/"><li className={styles.modalLI + ' ' + styles.modalLIOdd}>Github Repo</li></a>
                        <a className={styles.modalA} href="/"><li className={styles.modalLI}>Let's Talk!</li></a>
                    </ul>
                </Modal>
            </div>
        );
    }

}

export default Header;