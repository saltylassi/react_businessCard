import React from "react";
import LoginContainer from "./loginContainer";

const Index = (props) => {
    return <LoginContainer authService={props.authService} />;
};

export default Index;
