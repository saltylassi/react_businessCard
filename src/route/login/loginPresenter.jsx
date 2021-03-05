import React from "react";
import LoginFooter from "../../components/login/login_footer/loginFooter";
import LoginHeader from "../../components/login/login_header/loginHeader";
import styles from "./loginPresenter.module.css";
const LoginPresenter = ({ handleGoogleLogin, handleGithubLogin }) => {
    return (
        <div className={styles.container}>
            <div className={styles.body}>
                <LoginHeader />
                <div className={styles.content}>
                    <span className={styles.title}>Login</span>
                    <button
                        className={styles.googleLogin}
                        onClick={handleGoogleLogin}
                    >
                        <span className={styles.btnText}>Google</span>
                    </button>
                    <button
                        className={styles.githubLogin}
                        onClick={handleGithubLogin}
                    >
                        <span className={styles.btnText}>Github</span>
                    </button>
                </div>
                <LoginFooter />
            </div>
        </div>
    );
};

export default LoginPresenter;
