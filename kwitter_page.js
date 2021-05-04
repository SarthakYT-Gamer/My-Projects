//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCffzJF1B2oAENRSp11Oz2IjcpxaG8M7D4",
      authDomain: "kwitter-cdbb0.firebaseapp.com",
      databaseURL: "https://kwitter-cdbb0.firebaseio.com",
      projectId: "kwitter-cdbb0",
      storageBucket: "kwitter-cdbb0.appspot.com",
      messagingSenderId: "7723175353",
      appId: "1:7723175353:web:cc635906fb0a161aed3a68"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      
      });
      document.getElementById("msg").value="";
}
