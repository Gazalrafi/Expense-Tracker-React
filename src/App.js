import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import ProfilePage from './pages/ProfilePage.js';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/changepassword'>
          {authCtx.isLoggedIn && <UserProfile />}
        </Route>
        <Route path='/complete'>
          {authCtx.isLoggedIn && <ProfilePage />}
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      {!authCtx.isLoggedIn && (
            <AuthPage/>
        )}

      {authCtx.isLoggedIn && (
            <HomePage/>
        )}
        
    </Layout>

  );
}

export default App;