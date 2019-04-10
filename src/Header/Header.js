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

    scrollHandler = () => {
        window.scrollTo(0,document.body.scrollHeight);
    }

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
                    <a className={styles.a} rel="noopener noreferrer" target="_blank" href="https://raw.githubusercontent.com/austinbeaufort/formal/master/style.css"><li className={styles.li}>Download</li></a>
                    <a className={styles.a} rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/formal-forms"><li className={styles.li}>npm</li></a>
                    <a className={styles.a} rel="noopener noreferrer" target="_blank" href="https://github.com/austinbeaufort/formal"><li className={styles.li}>Github Repo</li></a>
                    <li onClick={this.scrollHandler} className={styles.li + ' ' + styles.a}>Let's Talk!</li>
                </ul>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <ul className={styles.modalUL}>
                        <a className={styles.modalA} rel="noopener noreferrer" target="_blank" href="https://raw.githubusercontent.com/austinbeaufort/formal/master/style.css"><li className={styles.modalLI + ' ' + styles.modalLIOdd}>Download</li></a>
                        <a className={styles.modalA} rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/formal-forms"><li className={styles.modalLI}>npm</li></a>
                        <a className={styles.modalA} rel="noopener noreferrer" target="_blank" href="https://github.com/austinbeaufort/formal"><li className={styles.modalLI + ' ' + styles.modalLIOdd}>Github Repo</li></a>
                    </ul>
                </Modal>
            </div>
        );
    }

}

export default Header;