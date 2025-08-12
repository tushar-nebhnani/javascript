document.addEventListener('DOMContentLoaded', () => {
    
    const expenseForm = document.getElementById('expense-form')
    const expenseName = document.getElementById('expense-name')
    const expenseAmount = document.getElementById('expense-amount')
    const expenseList = document.getElementById('expense-list')
    const displayTotalAmount = document.getElementById('total')

    let expenses = JSON.parse(localStorage.getItem("expense-list")) || []
    let totalAmount = calculateTotal()

    renderExpenses()

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = expenseName.value.trim()
        const amt = parseFloat(expenseAmount.value.trim())

        if(name !== "" && !isNaN(amt) && amt > 0) {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amt
            }

            expenses.push(newExpense)
            saveExpenseLocal()
            renderExpenses()
            updateTotal()

            // clear input
            expenseName.value = ""
            expenseAmount.value = ""
        }
    })

    function saveExpenseLocal() {
        localStorage.setItem("expense-list", JSON.stringify(expenses))
    }
   
    function calculateTotal() {
        return expenses.reduce((sum, expenses) => (sum + expenses.amount), 0)
    }

    function updateTotal() {
        totalAmount = calculateTotal()
        displayTotalAmount.textContent = totalAmount.toFixed(2)
    }

    function renderExpenses() {
        expenseList.innerHTML = ""
        expenses.forEach(expense => {
            const li = document.createElement('li')
            li.innerHTML = `
                ${expense.name} - $${expense.amount}
                <button data-id="${expense.id}">Delete</button>
            `
            expenseList.appendChild(li)
        });
    }

    expenseList.addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const expenseId = parseInt(e.target.getAttribute('data-id'))
            expenses = expenses.filter(expense => expense.id !== expenseId)
            saveExpenseLocal()
            renderExpenses()
            updateTotal()
        }
    })
})