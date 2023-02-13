document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getinputFieldValueById ('deposit-field');
    const previousDepositAmount = getTextFieldValueById('deposit-total');
    const currentDeposit =newDepositAmount + previousDepositAmount;
    
    setElementValueById('deposit-total',currentDeposit);

    const previousBalanceTotal = getTextFieldValueById('balance-field');
    const currentbalance = previousBalanceTotal + newDepositAmount;
    setElementValueById('balance-field',currentbalance);
})