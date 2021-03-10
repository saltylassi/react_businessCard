import React from "react";
import LoginHeader from "../../components/login/login_header/loginHeader";
import LoginFooter from "../../components/login/login_footer/loginFooter";
import styles from "./mainPresenter.module.css";
import Editor from "../../components/main/editor/editor";
import Preview from "../../components/main/preview/preview";

const MainPresenter = ({ handleLogout }) => {
    return (
        <div className={styles.container}>
            <div className={styles.contents}>
                <LoginHeader handleLogout={handleLogout} />
                <div className={styles.wrapper}>
                    <Editor />
                    <Preview />
                </div>
                <LoginFooter />
            </div>
        </div>
    );
};

export default MainPresenter;
