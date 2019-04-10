import React from 'react';
import styles from './HowItWorks.module.css';

const howItWorks = () => {
    return (
        <div className={styles.intro}>
            <hr></hr>
            <h3>How it Works</h3>
            <h4>1. Find an input design you love!</h4>
            <h4>2. Found it? Great! Click the "Copy Code Button"</h4>
            <h4>3. Paste (CTRL + V) the code into your CSS File</h4>
            <h4>4. Add the classes shown to the input you want to style </h4>
            <h4>5. Behold, the finished input. (You did amazing!)</h4>
            <hr></hr>
        </div>
    );
}

export default howItWorks;