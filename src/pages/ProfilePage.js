import classes from './ProfilePage.module.css';
import React,{useRef} from 'react';

const ProfilePage=()=>{
    const nameRef=useRef('');
    const profilePhotoRef=useRef('');

    const submitHandler=(event)=>{
        event.preventDefault(); 

        const userDetails={
            name:nameRef.current.value,
            link:profilePhotoRef.current.value
        };
        addHandler(userDetails);
        console.log(userDetails)
        async function addHandler() {
            const response = await fetch('https://expense-tracker-b6997-default-rtdb.firebaseio.com/profile.json', {
              method: 'POST',
              body: JSON.stringify(userDetails),
              headers: {
                'Content-Type': 'application/json'
              }
            });
            const data = await response.json();
            console.log(data);
          } 
        }
       
return (
    <div>
        <header className={classes.header}>
        <p className={classes.paragraphA}>your Profile is 64% completd.A complete Profile has
           higher chances of landing a Job.
        </p>
        <p className={classes.paragraphB}>Complete now</p>
        </header>
    <form className={classes.form} onSubmit={submitHandler}>
        <div>
        <h2>Contact Details</h2>
        <div/>
        <div >
        <button className={classes.cancelButton}>cancel</button>
        </div>
        </div>
        <label htmlFor="name">Full Name</label><span/>
        <input type='text' id='name' ref={nameRef}/><span/>
        <label htmlFor="url"> Profile photo URL</label><span/>
        <input type='url' id='url' ref={profilePhotoRef}/>
        <div >
        <button className={classes.updateButton} >update</button>
        </div>   
    </form>
    </div>
);
}
export default ProfilePage;