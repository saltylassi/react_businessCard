import React, { useEffect } from "react";
import { useHistory } from "react-router";
import LoginPresenter from "./loginPresenter";

const LoginContainer = ({ authService }) => {
    const history = useHistory();

    const goToMain = (userId) => {
        console.log(history);
        history && history.push({ pathname: "/main", state: { id: userId } });
    };

    const handleGoogleLogin = async () => {
        const {
            user: { uid },
        } = await authService.login("Google");
        goToMain(uid);
    };

    const handleGithubLogin = async () => {
        const {
            user: { uid },
        } = await authService.login("Github");
        goToMain(uid);
    };

    const handleLogout = async () => {
        await authService.logout();
        history && history.push("/");
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            user && goToMain(user.id);
        });
    });

    return (
        <LoginPresenter
            handleGoogleLogin={handleGoogleLogin}
            handleGithubLogin={handleGithubLogin}
            handleLogout={handleLogout}
        />
    );
};

export default LoginContainer;
