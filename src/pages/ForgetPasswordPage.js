 import classes from './ForgetPasswordPage.module.css';
 import {NavLink} from 'react-router-dom';
 import {useRef} from 'react';

const ForgetPasswordPage=()=>{

const emailRef=useRef();




const ForgetPasswordHandler=()=>{
   
    const enteredEmail=emailRef.current.value; 

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDSYzPDEHee8aptSJoR17wu7oSgdkO-ZR4',{
        method:'POST',
        body:JSON.stringify({
        requestType:"PASSWORD_RESET",
        email:enteredEmail,
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

return (
<div>
<form className={classes.main} onSubmit={ForgetPasswordHandler}>
<label className={classes.label} htmlFor='input'>Enter the E-mail with which you have Registered</label>
<input className={classes.input} id='input' placeholder='Email' type='email' ref={emailRef}/>
<button className={classes.button}> Send Link</button>
<p className={classes.paragraph}>Already a user?</p>
<NavLink to='loglink' className={classes.link}>Login</NavLink>
</form>

</div>
)
 }
 export default ForgetPasswordPage;