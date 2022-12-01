import StartingPageContent from '../components/StartingPage/StartingPageContent';
import classes from './HomePage.module.css';
import React,{useContext} from 'react';
import AuthContext from '../store/auth-context.js';

const HomePage = () => {

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
 
return <div><StartingPageContent />;
<button className={classes.button} onClick={verifyHandler}>Verify Email Address </button>
</div>
};
export default HomePage;
 