import React from 'react';
import { useState ,useRef, useContext} from 'react';
import AuthContext from '../../store/auth-context.js';
import classes from './AuthForm.module.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {NavLink} from 'react-router-dom';


const AuthForm = () => { 

const history=useHistory();
const emailInputRef=useRef();
const passwordInputRef=useRef();
const confirmPasswordInputRef=useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading] =useState(false);

 const authCtx= useContext(AuthContext);
 

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler=(event)=>{
    event.preventDefault();

  const enteredEmail=emailInputRef.current.value;
  const enteredPassword=passwordInputRef.current.value;
  const enteredConfirmPassword=confirmPasswordInputRef.current.value;
  if(enteredPassword!==enteredConfirmPassword){
    alert('passwords do not match');
  }
  else{

  setIsLoading(true);
  let url;
  if(isLogin){ //
    url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSYzPDEHee8aptSJoR17wu7oSgdkO-ZR4';
    
  }else{
    url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSYzPDEHee8aptSJoR17wu7oSgdkO-ZR4'; 
  }
  fetch(
    url,
    {
  method:'POST',
  body:JSON.stringify({
    email:enteredEmail,
    password:enteredPassword,
    returnSecureToken:true
  }),
  headers:{
    'content-type':'application/json'
  }
  })
  .then((res)=>{
    console.log(res);
    setIsLoading(false);
    if(res.ok){
   return res.json();

    }else{
      return res.json().then((data)=>{
        console.log(data)
      let errorMessage='Authentication failed!';
      // if(data && data.error && data.error.message){
      //   errorMessage=data.error.message;
      // }
      throw new Error(errorMessage);
        
      });
    }
  }).then((data)=>{
    authCtx.login(data.idToken);
    history.replace('/');
  })
    .catch((err)=>{
      alert(err.message)
    })


    
    axios({
      method:'POST',
      url:'https://crudcrud.com/api/1743ae2b4de449cd85e17a5065fa2ac8/emailData',
      data:{
          login:isLogin,
          email:enteredEmail,
          confirmPassword:enteredConfirmPassword
      }
   })
   .then((response)=>{
     console.log(response)
   }).catch((err)=>{
      console.log(err)
   })
   
  }
} 
  
  
  
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Sign Up' : 'Login'}</h1>
       <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='confirm_password'>Confirm Password</label>
          <input type='password' id='confirm_password' required ref={confirmPasswordInputRef}/>
        </div>
        <div>
          
          <NavLink className={classes.list} to='/forget'>forget password?</NavLink>
          
       </div>
        <div className={classes.actions}>
          {! isLoading && <button>{isLogin ? 'Sign Up': 'Login'}</button>}
          {isLoading && <p>sending request...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Have an Account?Login' : 'Create New Account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
