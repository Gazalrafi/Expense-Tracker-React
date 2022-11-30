import React from 'react';
import {useContext} from 'react';
import { Link } from 'react-router-dom';
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
      <Link to='/'>
        <div className={classes.logo}>MyWebLink</div>
      </Link>

      <nav>
        <ul> 
        {(isLoggedIn && 
          <li>
          <Link to='/home'>Home</Link>
        </li>
        )}
        {(isLoggedIn && 
        <li>
          <Link to='/products'>Products</Link>
        </li>
        )}

        {(isLoggedIn && 
        <li>
          <Link to='/about'>About Us</Link>
       </li>
       )}
        
          {isLoggedIn && (
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
           )}
           {isLoggedIn && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
           )}
        </ul>
      </nav>
    </header>
  
    
  );
};

export default MainNavigation;
