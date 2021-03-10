import Router from "./route";
import AuthService from "./service/auth_service";
import styles from "./app.module.css";

function App() {
    const authService = new AuthService();
    return (
        <div className={styles.container}>
            <Router authService={authService} />
        </div>
    );
}

export default App;
