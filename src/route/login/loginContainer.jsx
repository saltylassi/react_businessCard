import React from "react";
import LoginPresenter from "./loginPresenter";
import firebase from "firebase/app";
import "firebase/auth";

const LoginContainer = (props) => {
    const handleGoogleLogin = () => {
        console.log("google");
    };

    const handleGoogleLogout = () => {};

    const handleGithubLogin = () => {
        console.log("github");
    };

    return (
        <LoginPresenter
            handleGoogleLogin={handleGoogleLogin}
            handleGithubLogin={handleGithubLogin}
        />
    );
};

export default LoginContainer;
