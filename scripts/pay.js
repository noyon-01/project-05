document.getElementById("pay_money_btn").addEventListener("click", function () {
  const bank = document.getElementById("pay_money_bank");
  const payBank = bank.value;
  if (payBank === "Select bank") {
    alert("Please Select a Bank.");
    return;
  }

  const accNumber = getValueFormInput("pay_momey_number");
  if (accNumber.length != 11) {
    alert("Invalid Biller Account Number!");
    return;
  }

  const payAmount = getValueFormInput("pay_money_amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(payAmount);

  if (newBalance < 0) {
    alert("Invalid Pay Amount!");
    return;
  }

  const payPin = getValueFormInput("pay_money_pin");
  if (payPin === "1234") {
    alert("Pay Bill is Successfully Completed.");
    setBalance(newBalance);

    // !Transaction Section Starts Here! //
    const history = document.getElementById("transaction_history_container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div id="transactions_card" class="p-5 bg-base-100 rounded-2xl shadow">
                <h1 class="text-1xl font-bold mb-2">Pay Bill</h1>
                <p>Pay Bill ${payAmount} Taka Form ${bank} Bank, Account No: ${accNumber}, on ${new Date()}</p>
    </div>`;
    history.appendChild(newHistory);
    // !Transaction Section Ends Here! //

  } else {
    alert("Invalid Pin Number!");
    return;
  }
});
