import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app.js";
import dotenv from "dotenv";

dotenv.config();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
