//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCgM7vlRSDLMpC-Jsrj0uvW5lqdDjVNsSA",
      authDomain: "kwitter-app-6d7ee.firebaseapp.com",
      databaseURL: "https://kwitter-app-6d7ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-6d7ee",
      storageBucket: "kwitter-app-6d7ee.appspot.com",
      messagingSenderId: "79917034557",
      appId: "1:79917034557:web:e5413193a59fa752eece54"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message :msg,
            name:user_name,
            like:0
      });

      document.getElementById("msg").value ="";
    }

    function logout()
    {
          localStorage.removeItem("room_name");
          localStorage.removeItem("user_name");
          window.location = "index.html";
    }
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
