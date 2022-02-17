let expensesBanance = document.getElementById('total-cost');
let balance = document.getElementById('balance');

//-------------------calculate button-------------------------
const calculateButton = document.getElementById('c-btn');
calculateButton.addEventListener('click', function() {
    const income = document.getElementById('income');
    const food = document.getElementById('food');
    const rent = document.getElementById('rent');
    const clothes = document.getElementById('clothes');

    // get value
    const incomeValue = parseFloat(income.value);
    const foodValue = parseFloat(food.value);
    const rentValue = parseFloat(rent.value);
    const clothesValue = parseFloat(clothes.value)

    // total cost
    const totalExpenses = foodValue + rentValue + clothesValue;
    expensesBanance.innerText = totalExpenses;

    // new balance
    balance.innerText = incomeValue - totalExpenses;

    // remove input value
    income.value = "";
    food.value = "";
    rent.value = "";
    clothes.value = "";

})


// ----------------------savings button--------------------------
const savingsButton = document.getElementById('s-btn');
savingsButton.addEventListener('click', function() {
    // new balance - discount
    const newBalance = balance.innerText;
    const newBalanceValue = parseFloat(newBalance);
    // savings-discount
    const savingsDiscount = document.getElementById('savings-discount');
    const savingsDiscountValue = parseFloat(savingsDiscount.value);
    const savingsAmountValue = (newBalanceValue * savingsDiscountValue) / 100;

    // savingsAmount set 
    const savingsAmount = document.getElementById('savings-amount');
    savingsAmount.innerText = savingsAmountValue;

    // Remaining balance 
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = newBalanceValue - savingsAmountValue;

    // remove input value
    savingsDiscount.value = "";
})