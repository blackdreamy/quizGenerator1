import firebase from 'firebase/app';
import 'firebase/database'; // This line is important

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAcEZEvST8qBJXNWQFJcIKIeBeZf0h8vCc",
    authDomain: "quizgenerator-b57fe.firebaseapp.com",
    databaseURL: "https://quizgenerator-b57fe.firebaseio.com"
  });


export default firebaseApp;