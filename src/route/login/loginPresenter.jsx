import React from "react";
import LoginContent from "../../components/login/login_content/loginContent";
import styles from "./loginPresenter.module.css";
const LoginPresenter = ({
    handleGoogleLogin,
    handleGithubLogin,
    handleLogout,
}) => {
    return (
        <div className={styles.container}>
            <LoginContent
                handleGoogleLogin={handleGoogleLogin}
                handleGithubLogin={handleGithubLogin}
            />
        </div>
    );
};

export default LoginPresenter;
