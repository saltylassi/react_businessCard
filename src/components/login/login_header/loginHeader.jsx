import React from "react";
import styles from "./loginHeader.module.css";

const LoginHeader = (props) => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={"/images/logo.png"}></img>
            <span className={styles.title}>Business Card Maker</span>
        </div>
    );
};

export default LoginHeader;
