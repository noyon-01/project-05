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
  } else {
    alert("Invalid Pin Number!");
    return;
  }
});
