import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCs1uuJGNtvf8iiSE9fo4W5JzxXT1oA0ZU",
  authDomain: "e-ride-6893a.firebaseapp.com",
  projectId: "e-ride-6893a",
  storageBucket: "e-ride-6893a.appspot.com",
  messagingSenderId: "966064865955",
  appId: "1:966064865955:web:e5e63cc16a0c0c2f2bf516"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
