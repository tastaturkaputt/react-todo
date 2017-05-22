import firebase from 'firebase';

try {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCibI2FNL4i-eJ3wnkyccYTVdBwJcLM4PI",
    authDomain: "tastaturkaputt-todo-app.firebaseapp.com",
    databaseURL: "https://tastaturkaputt-todo-app.firebaseio.com",
    projectId: "tastaturkaputt-todo-app",
    storageBucket: "tastaturkaputt-todo-app.appspot.com",
    messagingSenderId: "143389658738"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
