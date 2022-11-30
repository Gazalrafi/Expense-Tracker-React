import React from 'react';
import {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => { 
const authCtx=useContext(AuthContext);

const isLoggedIn=authCtx.isLoggedIn;

const logoutHandler=()=>{
  authCtx.logout();
}
  return (
  
    <header className={classes.header}>
     <img className={classes.image} src="https://images.template.net/wp-content/uploads/2014/10/Black-Triangle-Shape.jpg" alt=""/>
      <NavLink to='/'>
        <div className={classes.logo}>MyWebLink</div>
      </NavLink>

      <nav className={classes.nav}>
        <ul> 
        {(isLoggedIn && 
          <li>
          <NavLink to='/home'>Home</NavLink>
        </li>
        )}
        {(isLoggedIn && 
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        )}

        {(isLoggedIn && 
        <li>
          <NavLink to='/about'>About Us</NavLink>
       </li>
       )}
        
          {isLoggedIn && (
          <li>
            <NavLink to='/changepassword'>Change password</NavLink>
          </li>
           )}
           {isLoggedIn && (
          <li >
            <button onClick={logoutHandler}>Logout</button>
          </li>
           )}
          
           <li><p className={classes.paragraph}>Incomplete profile.</p></li><span/>
           {isLoggedIn && (
          <li>
            <NavLink to='/complete' className={classes.complete}>Complete now</NavLink> 
          </li>
           )}
          
        </ul>
      </nav>
    </header>
  
    
  );
};

export default MainNavigation;
