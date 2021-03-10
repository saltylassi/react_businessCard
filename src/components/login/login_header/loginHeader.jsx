import React from "react";
import styles from "./loginHeader.module.css";

const LoginHeader = ({ handleLogout }) => {
    return (
        <div className={styles.container}>
            {handleLogout && (
                <button className={styles.logoutBtn} onClick={handleLogout}>
                    LogOut
                </button>
            )}
            <img className={styles.logo} src={"/images/logo.png"}></img>
            <span className={styles.title}>Business Card Maker</span>
        </div>
    );
};

export default LoginHeader;
