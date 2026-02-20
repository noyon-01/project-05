document.getElementById("cashout_btn").addEventListener("click", function () {
  const cashoutNumber = getValueFormInput("cashout_Input_number");
  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }
  const cashoutAmount = getValueFormInput("cashout_Input_amount");
  const currentBalance = getBalance();
  
  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }

  const cashoutPin = getValueFormInput("cashout_pin");
  if (cashoutPin === "1234") {
    alert("Cashout is Successfully Done.");
    setBalance(newBalance);
  } else {
    alert("Invalid Pin Number.");
    return;
  }
});

// !Many Line Code is Not Recommended so Also functional code in Above! //
// document.getElementById("cashout_btn").addEventListener("click", function () {
//   const cashoutInput = document.getElementById("cashout_Input_number");
//   const cashoutAgentNumber = cashoutInput.value;
//   if (cashoutAgentNumber.length != 11) {
//     alert("Invalid Number");
//     return;
//   }

//   const cashoutInputAmount = document.getElementById("cashout_Input_amount");
//   const cashoutAmout = cashoutInputAmount.value;

//   const balance = document.getElementById("balance");
//   const balanceAmout = balance.innerText;

//   const newBalance = Number(balanceAmout) - Number(cashoutAmout);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   } else {
//   }

//   const cashoutPinNumber = document.getElementById("cashout_pin");
//   const cashoutPin = cashoutPinNumber.value;
//   if (cashoutPin === "1234") {
//     alert("Cashout Successfully");
//     balance.innerText = newBalance;
//   } else {
//     alert("Invalid Pin Number");
//     return;
//   }
// });
