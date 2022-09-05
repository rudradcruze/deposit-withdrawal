document.getElementById('buttonDeposit').addEventListener('click', function(){
    const depositInputFieldValue = convertInputValueById('depositAmount');
    const previousDepositTotal = convertTextValueById('deposit');
    const previousBalance = convertTextValueById('balance');
    const newUpdatingAmount = previousDepositTotal + depositInputFieldValue;
    const newUpdatingBalance = previousBalance + depositInputFieldValue;

    setTextElementValueById('deposit', newUpdatingAmount);
    setTextElementValueById('balance', newUpdatingBalance);
})

document.getElementById('buttonWithdraw').addEventListener('click', function () {
    const withdrawInputFieldValue = convertInputValueById('withdrawAmount');
    const previousWithdrawTotal = convertTextValueById('withdraw');
    const previousBalance = convertTextValueById('balance');

    if(previousBalance<withdrawInputFieldValue)
    {
        alert("You cannot withdraw " + withdrawInputFieldValue + " this money. It should be less then " + previousBalance + " this amount.");
        return;
    }
    
    const newUpdatingBalance = previousBalance - withdrawInputFieldValue;
    const newUpdatingAmount = previousWithdrawTotal + withdrawInputFieldValue;

    setTextElementValueById('withdraw', newUpdatingAmount);
    setTextElementValueById('balance', newUpdatingBalance);
        
})