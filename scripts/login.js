document.getElementById("login_btn").addEventListener("click", function () {
  const loginInput = document.getElementById("login_Input");
  const numberInput = loginInput.value;
  console.log(numberInput);

  const pinInput = document.getElementById("login_pin");
  const loginPin = pinInput.value;
  console.log(loginPin);

  if (numberInput === "01585735520" && loginPin === "1234") {
    alert("Login Success");
    window.location.assign("/styles/home.html");
  } else {
    alert("Login Failed");
    return;
  }
});
