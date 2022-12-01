import React,{useState} from "react";
import './ExpenseForm.css';

const ExpenseForm=(props)=>{                   //
    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');
    const[enteredLocation,setEnteredLocation]=useState('');
    const[enteredCategory,setEnteredCategory]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        
    };
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        
    };
    const dateChangeHandler=(event)=>{
       setEnteredDate(event.target.value);
        
    };
    const locationChangeHandler=(event)=>{
        setEnteredLocation(event.target.value);
    }
    const categoryChangeHandler=(event)=>{
        setEnteredCategory(event.target.value);
    }
    const submitHandler=(event)=>{
    event.preventDefault();

    const expenseData={
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
        location:enteredLocation,
        category:enteredCategory
    }
    props.onSaveExpenseData(expenseData);

    console.log(expenseData)

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    };
    
return (
<form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__controls">
            <label>Description</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>

        <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateChangeHandler}/>
        </div>

        <div className="new-expense__controls">
            <label>Category</label>
            <select value={enteredCategory} onChange={categoryChangeHandler}>
                <option value='salary'>Salary</option>
                <option value='fuel'>Fuel</option>
                <option value='shopping'>Shopping</option>
                <option value='salary'>Food</option>
                <option value='trip'>Vacation Trip</option>
            </select>
        </div>
        <div className="new-expense__controls">
            <label>Location</label>
            <input type="text" value={enteredLocation} onChange={locationChangeHandler}/>
        </div>
    </div>
    <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
    </div>
</form>
);
}
export default ExpenseForm;