
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
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
document.getElementById("user_name").innerHTML="Welcome" +user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(firebase_message_id);
     console.log(message_date);
     name = message_data['name'];
     message = meassage_data['name'];
     like = meassage_data['message'];
     nam_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>"
meassage_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value"+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like+"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location="kwitter.html";
      

}
function updateLike(message_id)
{
      console.log("clciked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name)
.child(message_id).update({
      like : updated_like
});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}