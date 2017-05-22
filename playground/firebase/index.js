import firebase from 'firebase';

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

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  appInfo: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'VS',
    age: 28
  }
});

//

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

todosRef.push({
  text: 'Walk the dog!1'
});

todosRef.push({
  text: 'Walk the dog!2'
});
