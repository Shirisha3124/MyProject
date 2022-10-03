const firebaseConfig = {
    apiKey: "AIzaSyBR051oP5sQlpv5ucZBRSyhyX-9J-JyuJw",
    authDomain: "contactform-page.firebaseapp.com",
    databaseURL: "https://contactform-page-default-rtdb.firebaseio.com",
    projectId: "contactform-page",
    storageBucket: "contactform-page.appspot.com",
    messagingSenderId: "584751713943",
    appId: "1:584751713943:web:f6fb958ee405eb7db663d2"
  };
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var message = getElementVal("message");

    console.log(name, emailid, phone, message);
  }

  const getElementVal = (id) => {
     return document.getElementById(id).value;
  };
