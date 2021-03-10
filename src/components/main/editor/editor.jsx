import React from "react";
import styles from "./editor.module.css";

const Editor = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.title}>Card Maker</span>
            </div>
        </div>
    );
};

export default Editor;
