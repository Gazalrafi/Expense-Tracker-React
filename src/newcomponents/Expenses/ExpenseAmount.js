import React from "react";
import './ExpenseAmount.css';
const ExpenseAmount=(props)=>{
    
    return (
      <div>
    <div className='expense-item__price'>{props.amount}</div>
      </div>
      );
}
export default ExpenseAmount;