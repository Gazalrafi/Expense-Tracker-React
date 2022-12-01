import StartingPageContent from '../components/StartingPage/StartingPageContent';
import classes from './HomePage.module.css';
import React,{useState,useContext} from 'react';
import AuthContext from '../store/auth-context.js';
import ExpensesMain from'../newcomponents/Expenses/ExpensesMain.js';
import NewExpense from "../newcomponents/NewExpenses/NewExpense.js";

let Dummy_Expense=[];

const HomePage = () => {

  const [expenses,setExpenses]=useState(Dummy_Expense);
   
    const addExpenseHandler=(expense)=>{
        const updatedExpense=[expense,...expenses];// expense is the data which came from ExpensesMain
        setExpenses(updatedExpense);
    };

const authCtx=useContext(AuthContext);

const verifyHandler=()=>{
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDSYzPDEHee8aptSJoR17wu7oSgdkO-ZR4',{
        method:'POST',
        body:JSON.stringify({
        requestType:"VERIFY_EMAIL",
        idToken: authCtx.token,
        }),
        headers:{
          'content-type':'application/json'
        }
        }).then((res)=>{
            if(res.ok){
            console.log(res);
         alert('email verification sent')
        }
        })
        .catch((err)=>{
          alert('error in email verification')
        })

}
 
return <div>
   <div>
            
            <NewExpense  onAddExpense={addExpenseHandler}/>
            <ExpensesMain item={expenses}/>
    </div>
  <StartingPageContent />;
<button className={classes.button} onClick={verifyHandler}>Verify Email Address </button>

         
</div>
};
export default HomePage;
 