import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
    login = (providerName) => {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();

        return firebase.auth().signInWithPopup(authProvider);
    };

    onAuthChange = (onUserchanged) => {
        firebase.auth().onAuthStateChanged((user) => {
            onUserchanged(user);
        });
    };

    logout = () => {
        firebase.auth().signOut();
    };
}

export default AuthService;
