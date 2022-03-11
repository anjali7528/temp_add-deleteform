import React from 'react'
import Income from './Income';
import Expense from './Expense';
import Balance from './Balance';


function ExpenseDetails() {
  return (
    //<div>ExpenseDetails</div>
    <div className="Expense-Details">
      <h2>Expense Details</h2>
      <div className='balance'>  <Balance /></div>
      <div className='income'><Income /></div>
      <div className='expenseDetails'>
        <Expense />
        </div>
      
        
    </div>
  )
}

export default ExpenseDetails