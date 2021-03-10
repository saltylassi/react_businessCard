import React, { useEffect } from "react";
import { useHistory } from "react-router";
import MainPresenter from "./mainPresenter";

const MainContainer = ({ authService }) => {
    const history = useHistory();

    const handleLogout = async () => {
        await authService.logout();
        history && history.push("/");
    };

    useEffect(() => {
        authService.onAuthChange((user) => {
            !user && history.push("");
        });
    });

    return <MainPresenter handleLogout={handleLogout} />;
};

export default MainContainer;
