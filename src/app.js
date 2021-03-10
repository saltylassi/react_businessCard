import "./app.css";
import Router from "./route";
import AuthService from "./service/auth_service";

function App() {
    const authService = new AuthService();
    return <Router authService={authService} />;
}

export default App;
