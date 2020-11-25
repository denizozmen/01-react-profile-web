import firebase from "firebase/app";
import "firebase/auth";

const devConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APP_ID,
};

const prodConfig = {};

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.firebaseAuth = firebase.auth();
  }
}
export default new Firebase();
