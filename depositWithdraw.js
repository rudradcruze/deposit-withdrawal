
document.getElementById('buttonDeposit').addEventListener('click', function(){
    const balance = document.getElementById('balance');
    const balanceAmount = parseFloat(balance.innerText);
    // For deposit input field
    const depositField = document.getElementById('depositAmount');
    const depositFieldValue = depositField.value;
    // for deposit balance show
    const depositDisplay = document.getElementById('deposit');
    const deposit = parseFloat(depositDisplay.innerText)

    if (depositFieldValue === '')
    {
        depositField.value = '';
        return;
    }
    
    const depositAmount = parseFloat(depositFieldValue);
    depositDisplay.innerText = deposit + depositAmount;
    const balanceAmountCalculate = balanceAmount + depositAmount;
    balance.innerText = balanceAmountCalculate;

    depositField.value = '';
})

document.getElementById('buttonWithdraw').addEventListener('click', function(){

    const balance = document.getElementById('balance');
    const balanceAmount = parseFloat(balance.innerText);

    const withdrawField = document.getElementById('withdrawAmount');
    const withdrawDisplay = document.getElementById('withdraw');
    const withdraw = parseFloat(withdrawDisplay.innerText);
    
    if (withdrawField.value === '') {
        withdrawField.value = '';
        return;
    }

    const withdrawAmount = parseFloat(withdrawField.value);

    if (withdrawAmount > balanceAmount)
    {
        alert("please withdraw less then or equal " + balanceAmount + " this amount");
        withdrawField.value = '';
        return;
    }

    let balanceAmountWithdrawCalculation = balanceAmount - withdrawAmount;
    withdrawDisplay.innerText = withdrawAmount + withdraw;
    withdrawField.value = '';
    balance.innerText = balanceAmountWithdrawCalculation;

})