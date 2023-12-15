document.addEventListener('DOMContentLoaded', function () {
   

    function addExpense() {
        
        const expenseInput = document.getElementById('expense');
        const amountInput = document.getElementById('amount');
        const expensesList = document.getElementById('expenses');

       
        if (!expenseInput.value || !amountInput.value) {
            alert('Please enter both expense and amount.');
            return;
        }

        
        const listItem = document.createElement('li');
        listItem.textContent = `${expenseInput.value}: $${amountInput.value}`;

       
        expensesList.appendChild(listItem);

       
        expenseInput.value = '';
        amountInput.value = '';
    }

    
});
