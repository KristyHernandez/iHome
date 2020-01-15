// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
    // ...
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase with a "default" Firebase project
var ionbooking2Project = firebase.initializeApp(firebaseConfig);

console.log(ionbooking2Project.name);  // "[DEFAULT]"
