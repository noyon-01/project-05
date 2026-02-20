document.getElementById("cashout_btn").addEventListener("click", function () {
  const cashoutInput = document.getElementById("cashout_Input_number");
  const cashoutAgentNumber = cashoutInput.value;
  if (cashoutAgentNumber.length != 11) {
    alert("Invalid Number");
    return;
  }

  const cashoutInputAmount = document.getElementById("cashout_Input_amount");
  const cashoutAmout = cashoutInputAmount.value;

  const balance = document.getElementById("balance");
  const balanceAmout = balance.innerText;

  const newBalance = Number(balanceAmout) - Number(cashoutAmout);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  } else {
  }

  const cashoutPinNumber = document.getElementById("cashout_pin");
  const cashoutPin = cashoutPinNumber.value;
  if (cashoutPin === "1234") {
    alert("Cashout Successfully");
    balance.innerText = newBalance;
  } else {
    alert("Invalid Pin Number");
    return;
  }
});
