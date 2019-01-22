import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDPBBURzVARiiRvSJiDeWU5Mn6wd6rtQs0",
  authDomain: "mario-plan-cf934.firebaseapp.com",
  databaseURL: "https://mario-plan-cf934.firebaseio.com",
  projectId: "mario-plan-cf934",
  storageBucket: "mario-plan-cf934.appspot.com",
  messagingSenderId: "256912902683"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
