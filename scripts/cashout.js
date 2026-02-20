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

    // !Transaction Section Starts Here! //
    const history = document.getElementById("transaction_history_container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div id="transactions_card" class="p-5 bg-base-100 rounded-2xl shadow">
                <h1 class="text-2xl font-bold mb-2">Cashout</h1>
                <p>Cashout ${cashoutAmount} Taka Form Agent No: ${cashoutNumber}, on ${new Date()}</p>
    </div>`;
    history.appendChild(newHistory);
    // !Transaction Section Ends Here! //
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
