const balance = document.getElementById('balance');
const balanceAmount = parseFloat(balance.innerText);

document.getElementById('buttonDeposit').addEventListener('click', function(){
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
    balance.innerText = balanceAmount + depositAmount;

    depositField.value = '';
})

