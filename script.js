let expensesBanance = document.getElementById('total-cost');
let balance = document.getElementById('balance');


//----------------------------function section------------------------------
function updateAmount(isAmount) {
    // calculate area-------------------------- 
    if (isAmount == true) {
        const income = document.getElementById('income');
        const food = document.getElementById('food');
        const rent = document.getElementById('rent');
        const clothes = document.getElementById('clothes');

        // get value
        const incomeValue = parseInt(income.value);
        const foodValue = parseInt(food.value);
        const rentValue = parseInt(rent.value);
        const clothesValue = parseInt(clothes.value);

        // Error handle 
        if (isNaN(incomeValue) || isNaN(foodValue) || isNaN(rentValue) || isNaN(clothesValue)) {
            document.getElementById('string-error').style.display = "block";
            document.getElementById('negative-error').style.display = "none";
            document.getElementById('balance-error').style.display = 'none';

        }

        // -----------
        else {
            if (incomeValue < 0 || foodValue < 0 || rentValue < 0 || clothesValue < 0) {
                document.getElementById('negative-error').style.display = "block";
                document.getElementById('string-error').style.display = "none";
                document.getElementById('balance-error').style.display = 'none';


            } else {


                // total cost
                const totalExpenses = foodValue + rentValue + clothesValue;
                expensesBanance.innerText = totalExpenses;

                // new balance
                balance.innerText = incomeValue - totalExpenses;

                document.getElementById('negative-error').style.display = "none";
                document.getElementById('string-error').style.display = "none";
                document.getElementById('balance-error').style.display = 'none';

                // ------------
                if (incomeValue < expensesBanance.innerText) {
                    document.getElementById('balance-error').style.display = 'block';
                    document.getElementById('negative-error').style.display = "none";
                    document.getElementById('string-error').style.display = "none";
                    balance.innerText = 00;
                }

            }
        }
    }

    //--------- ----------savings area--------------------- 
    else if (isAmount == false) {
        // new balance - discount
        const newBalance = balance.innerText;
        const newBalanceValue = parseInt(newBalance);
        // savings-discount
        const savingsDiscount = document.getElementById('savings-discount');
        const savingsDiscountValue = parseInt(savingsDiscount.value);
        const savingsAmountValue = (newBalanceValue * savingsDiscountValue) / 100;

        if (savingsAmountValue > newBalance) {
            document.getElementById('savings-error').style.display = "block";
            document.getElementById('savings-input-error').style.display = "none";
            document.getElementById('savings-string-error').style.display = "none";
        }
        // --------
        else {
            if (savingsDiscountValue < 0) {
                document.getElementById('savings-input-error').style.display = "block";
                document.getElementById('savings-error').style.display = "none";
                document.getElementById('savings-string-error').style.display = "none";
            } else {
                if (isNaN(savingsDiscountValue)) {
                    document.getElementById('savings-string-error').style.display = "block";
                    document.getElementById('savings-input-error').style.display = "none";
                    document.getElementById('savings-error').style.display = "none";
                } else {
                    // savingsAmount set 
                    const savingsAmount = document.getElementById('savings-amount');
                    savingsAmount.innerText = savingsAmountValue;

                    // Remaining balance 
                    const remainingBalance = document.getElementById('remaining-balance');
                    remainingBalance.innerText = newBalanceValue - savingsAmountValue;
                    document.getElementById('savings-string-error').style.display = "none";
                    document.getElementById('savings-input-error').style.display = "none";
                    document.getElementById('savings-error').style.display = "none";

                }
            }
        }
    }
}


//-------------------calculate button-------------------------
const calculateButton = document.getElementById('c-btn');
calculateButton.addEventListener('click', function() {
    // call function 
    updateAmount(isAmount = true);

    // remove input value
    income.value = "";
    food.value = "";
    rent.value = "";
    clothes.value = "";

})


// ----------------------savings button------------------------
const savingsButton = document.getElementById('s-btn');
savingsButton.addEventListener('click', function() {
    // call function 
    const savingsDiscount = updateAmount(isAmount = false);

    // remove input value
    savingsDiscount.value = "";
})