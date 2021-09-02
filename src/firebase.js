// const firebaseConfig = {
//     apiKey: "AIzaSyCC5Fys1iQOraJZwM_sDUAlTXiMvr51pDE",
//     authDomain: "todo-app-be7cc.firebaseapp.com",
//     projectId: "todo-app-be7cc",
//     storageBucket: "todo-app-be7cc.appspot.com",
//     messagingSenderId: "89203244879",
//     appId: "1:89203244879:web:83d5c805795f7d5da04f3a",
//     measurementId: "G-GMC66QFJ98"
// };
import firebase from "firebase"
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCC5Fys1iQOraJZwM_sDUAlTXiMvr51pDE",
    authDomain: "todo-app-be7cc.firebaseapp.com",
    projectId: "todo-app-be7cc",
    storageBucket: "todo-app-be7cc.appspot.com",
    messagingSenderId: "89203244879",
    appId: "1:89203244879:web:83d5c805795f7d5da04f3a",
    measurementId: "G-GMC66QFJ98"
});
const db=firebaseApp.firestore();
export default db;