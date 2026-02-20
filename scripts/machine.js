function getValueFormInput(id) {
  const input = document.getElementById(id);
  const inputValue = input.value;
  return inputValue;
}

function getBalance() {
  const balance = document.getElementById("balance");
  const currentBalance = balance.innerText;
  return Number(currentBalance);
}

function setBalance(value) {
  const balance = document.getElementById("balance");
  balance.innerText = value;
}
