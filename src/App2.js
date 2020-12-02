import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import LoginForm from './Components/LoginForm';
import HeaderSito from './Components/HeaderSito';
import AgencyDesc from './Components/AgencyDesc';
import Footer from './Components/Footer';
import DataContextProvider from './Context/DataContext';
import DropdownFather from './Components/DropdownFather';
import './App.css';
import './index.css';
// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AuthExample() {

  return (
    <ProvideAuth>
      <Router>
        <div>
          <AuthButton />

          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Home</Link>
            </li>
          </ul>

          <Switch>
          <Route path="/login">
              <Form />
          </Route>
          <PrivateRoute path="/protected">
              <Home/>
              </PrivateRoute> 
            {/* <Route path="/login" component={Form} />
            <PrivateRoute path="/protected" component={Home} /> */}
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}





const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
        setUser("user")
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      <button
        onClick={() => {
          auth.signout(() => history.push("/login"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}



const Home = () =>{
    let history = useHistory();
    let auth = useAuth();
    return(
      

        <>
      <DataContextProvider>
      <div className="logged">
      <div className ="topbar">
        <h2 className="welcome">Benvenuto,</h2>
        <button onClick={()=>{ auth.signout(() => history.push("/login"));}} className="logout btn btn-primary">Logout</button>
      </div>
       <HeaderSito />
       {/* username={user.name}/>  */}
       {/* MAPPA QUI */}
       {/* <Map /> */}
       <AgencyDesc />
       <DropdownFather />
       <Footer/>
       </div>
       </DataContextProvider>
       </>
  
     
      
       
       )


}

function Form() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();



  let { from } = location.state || { from: { pathname: "/login" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    
    });
  };

  return (
    
    <div className="App">
    <LoginForm Login={login} /> 
    {/* Error={error}/> */}
  </div>
  );
}
