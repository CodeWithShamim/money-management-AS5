let expensesBanance = document.getElementById('total-cost');
let balance = document.getElementById('balance');


//----------------------------calculate section using function------------------------------
function updateAmount(isAmount) {
    if (isAmount == true) {
        const income = document.getElementById('income');
        const food = document.getElementById('food');
        const rent = document.getElementById('rent');
        const clothes = document.getElementById('clothes');

        // get value
        const incomeValue = parseFloat(income.value);
        const foodValue = parseFloat(food.value);
        const rentValue = parseFloat(rent.value);
        const clothesValue = parseFloat(clothes.value)

        // income.value == '' || food.value == '' || rent.value == '' || clothes.value == ''

        if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
            document.getElementById('negative-error').style.display = "block";


        } else {
            // total cost
            const totalExpenses = foodValue + rentValue + clothesValue;
            expensesBanance.innerText = totalExpenses;

            // new balance
            balance.innerText = incomeValue - totalExpenses;

            document.getElementById('negative-error').style.display = "none";

        }





    } else if (isAmount == false) {
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
        return savingsDiscount;
    }
}

//-------------------calculate button-------------------------
const calculateButton = document.getElementById('c-btn');
calculateButton.addEventListener('click', function() {
    // call function 
    updateAmount(isAmount = true)

    // remove input value
    income.value = "";
    food.value = "";
    rent.value = "";
    clothes.value = "";

})


// ----------------------savings button--------------------------
const savingsButton = document.getElementById('s-btn');
savingsButton.addEventListener('click', function() {
    // call function 
    const savingsDiscount = updateAmount(isAmount = false)

    // remove input value
    savingsDiscount.value = "";
})