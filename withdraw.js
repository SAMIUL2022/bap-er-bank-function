document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWidrawAmount= getinputFieldValueById ('withdraw-field');
    const previousWithdrawAmount = getTextFieldValueById('user-withdraw');
    const currentWithdraw = newWidrawAmount + previousWithdrawAmount;
   setElementValueById ('user-withdraw',currentWithdraw);
   const previousBalanceTotal = getTextFieldValueById('balance-field');
    const currentbalance = previousBalanceTotal - currentWithdraw;
    setElementValueById('balance-field',currentbalance);
})