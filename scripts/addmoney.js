document.getElementById("add_money_btn").addEventListener("click", function () {
  const bank = getValueFormInput("add_money_bank");
  if (bank === "Select bank") {
    alert("Please, Select a Bank");
    return;
  }

  const accNumber = getValueFormInput("add_momey_number");
  if (accNumber.length != 11) {
    alert("Invalid Account Number!");
    return;
  }

  const addAmount = getValueFormInput("add_money_amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(addAmount);

  const pin = getValueFormInput("add_money_pin");
  if (pin === "1234") {
    alert("Add Money is Successfully Done");
    setBalance(newBalance);

    // !Transaction Section Starts Here! //
    const history = document.getElementById("transaction_history_container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div id="transactions_card" class="p-5 bg-base-100 rounded-2xl shadow">
                <h1 class="text-2xl font-bold mb-2">Add Money</h1>
                <p>Add Money ${addAmount} Taka Form ${bank} Bank, Account No: ${accNumber}, on ${new Date()}</p>
    </div>`;
    history.appendChild(newHistory);
    // !Transaction Section Ends Here! //
  } else {
    alert("Invalid Pin Number!");
    return;
  }
});
