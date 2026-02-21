document
  .getElementById("transfer_send_btn")
  .addEventListener("click", function () {
    const transferAccNumber = getValueFormInput("transfer_acc_number");
    if (transferAccNumber.length != 11) {
      alert("Invalid User Account Number!");
      return;
    }

    const transferAmount = getValueFormInput("transfer_amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance - Number(transferAmount);
    if (newBalance < 0) {
      alert("Invalid Transfer Amount!");
      return;
    }

    const transferPin = getValueFormInput("transfer_pin_number");
    if (transferPin === "1234") {
      alert("Transfer Amount Sunccessfully Completed.");
      setBalance(newBalance);

      // !Transaction Section Starts Here! //
      const history = document.getElementById("transaction_history_container");
      const newHistory = document.createElement("div");
      newHistory.innerHTML = `
      <div id="transactions_card" class="p-5 bg-base-100 rounded-2xl shadow">
                <h1 class="text-1xl font-bold mb-2">Transfer Money</h1>
                <p>Transfer ${transferAmount} Taka Form User Acc No: ${transferAccNumber}, on ${new Date()}</p>
      </div>`;
      history.appendChild(newHistory);
      // !Transaction Section Ends Here! //

    } else {
      alert("Invalid Pin Number!");
      return;
    }
  });
