document.getElementById("get_bonus_btn").addEventListener("click", function () {
  const bonusCoupon = getValueFormInput("bonus_coupon");

  const currentBalance = getBalance();
  const bonus = 500;
  const newBalance = currentBalance + Number(bonus);
  console.log(newBalance);

  if (bonusCoupon === "ph--1234") {
    alert("You Are Successfully Get Bonus.");
    setBalance(newBalance);

    // !Transaction Section Starts Here! //
    const history = document.getElementById("transaction_history_container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div id="transactions_card" class="p-5 bg-base-100 rounded-2xl shadow">
                <h1 class="text-1xl font-bold mb-2">Get Bonuse</h1>
                <p>Get Bonus ${bonus} Taka and New Balance ${newBalance}, on ${new Date()}</p>
    </div>`;
    history.appendChild(newHistory);
    // !Transaction Section Ends Here! //

  } else {
    alert("Invalid Bonuse Coupon!");
    return;
  }
});
