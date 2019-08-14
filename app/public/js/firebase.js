
var keys = require("./keys.js.js.js");
  // Initialize Firebase
  firebase.initializeApp(keys);

   // FirebaseUI config.
   var uiConfig = {
    signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    }
  };

  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');



  
  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', uiConfig);





  // Create a variable to reference the database.
  // var database = firebase.database();

  // Initial Values
  // var youtubelink = "";

  // old function, may update this to add new audio files
  // Capture Button Click
  // $("#submit").on("click", function(event) {
  //   event.preventDefault();

  //   // Grabbed values from text boxes
  //   var name = $("#train-name").val().trim();
  //   var passw = $("#passw").val().trim();


    // Code for handling the push
  //   database.ref().push({
  //     name: name,
  //     passw: passw,
  //     first: first,
  //     freq: freq,
  //     dateAdded: firebase.database.ServerValue.TIMESTAMP
  //   });

  // });

  // Firebase watcher .on("child_added"
  // database.ref().on("child_added", function(snapshot) {
    // storing the snapshot.val() in a variable for convenience
    // var sv = snapshot.val();

    // Console.loging the last user's data
    // console.log(sv.name);
    // console.log(sv.passw);
    // console.log(sv.first);
    // console.log(sv.freq);

    // Change the HTML to reflect
    // $("#train-name-display").text(sv.name);
    // $("#passw-display").text(sv.role);
    // $("#first-train-display").text(sv.start);
    // $("#train-freq-display").text(sv.end);


    // Handle the errors
  // }, function(errorObject) {
  //   console.log("Errors handled: " + errorObject.code);
  // });