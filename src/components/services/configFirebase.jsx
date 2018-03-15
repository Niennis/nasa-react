import firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDVyeBn4MCShKJd-RqS8EJozWhIqy9maR4",
    authDomain: "project-nasa-news.firebaseapp.com",
    databaseURL: "https://project-nasa-news.firebaseio.com",
    projectId: "project-nasa-news",
    storageBucket: "project-nasa-news.appspot.com",
    messagingSenderId: "81167070788"
  };
  firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;