import React from "react";
import LoginHeader from "../../components/login/login_header/loginHeader";
import styles from "./mainPresenter.module.css";

const MainPresenter = ({ handleLogout }) => {
    return (
        <div className={styles.container}>
            <LoginHeader handleLogout={handleLogout} />
        </div>
    );
};

export default MainPresenter;
