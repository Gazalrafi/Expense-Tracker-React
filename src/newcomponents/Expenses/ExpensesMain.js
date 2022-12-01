import React,{useState} from "react";
import './ExpensesMain.css';    
import Expense from'./Expense.js';
import Card from'../UI/Card.js';
import ExpensesFilter from "./ExpensesFilter.js";
import ExpenseChart from './ExpensesChart.js';

const ExpensesMain=(props)=>{
  const [FilteredYear,setFilteredYear]=useState('2020');
      
  const saveYearHandler=(enteredYear)=>{
    setFilteredYear(enteredYear);
    console.log(enteredYear)
  };
  const filteredExpenses=props.item.filter(expense=>{
    return expense.date.getFullYear().toString()===FilteredYear;
  })
return (
  <div>
  <Card className='expensesMain'>
     <ExpensesFilter
      selected={FilteredYear}
      onChangeFilter={saveYearHandler}/>
      <ExpenseChart expenses={filteredExpenses}/>
    {filteredExpenses.length===0 && <p>No expenses found.</p>}
    {filteredExpenses.length>0 &&
      props.item.map( expensemain=>(
         
                < Expense
                    key={expensemain.id}
                    date={expensemain.date}
                    title={expensemain.title}
                    amount={expensemain.amount}
                    location={expensemain.location}
                    category={expensemain.category}/>
            )
    )
    }
    
    
     </Card>
     </div>
)
}
export default ExpensesMain;