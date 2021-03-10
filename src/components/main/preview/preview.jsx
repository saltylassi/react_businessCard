import React from "react";
import styles from "./preview.module.css";

const Preview = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>Card Preview</span>
            </div>
        </div>
    );
};

export default Preview;
