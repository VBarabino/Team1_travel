import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import DataContextProvider from './Context/DataContext';
import Cookies from 'js-cookie'
import LoginForm from './Components/LoginForm';
import HeaderSito from './Components/HeaderSito'
import AgencyDesc from './Components/AgencyDesc'
import Footer from './Components/Footer'
import DropdownFather from './Components/DropdownFather'

//import AuthApi from "./Component/AuthApi"
import AuthApi from './Components/AuthApi'
export default function App3() {
    const [auth,setAuth] = React.useState(false);

    const readCookie=()=>{
        const user = Cookies.get("user");
        if(user){
            setAuth(true);
        }
    }
    React.useEffect(() => {
        readCookie();
    }, [])
    return (
        <div>
            <AuthApi.Provider value={{auth,setAuth}}>
            <Router>
                <Routes/>
            </Router>
            </AuthApi.Provider>
        </div>
    )
}

const Login = () => {
    const Auth = React.useContext(AuthApi)
    const handleOnClick = () =>{
        Auth.setAuth(true);
        Cookies.set("user","loginTrue")
    }
    return(
        <div className="App">
    <LoginForm Login={handleOnClick} /> 
    {/* Error={error}/> */}
  </div>
    )
}

const Dashboard = () => {
    const Auth = React.useContext(AuthApi)
    const handleOnClick = () =>{
        Auth.setAuth(false);
        Cookies.remove("user");
    }
    return(
        <>
        <DataContextProvider>
        <div className="logged">
        <div className ="topbar">
          <h2 className="welcome">Benvenuto,</h2>
          <button onClick={handleOnClick} className="logout btn btn-primary">Logout</button>
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

const Routes = () =>{
    const Auth = React.useContext(AuthApi)
    return (
        <Switch>
            <ProtectedLogin path="/Login" component={Login} auth={Auth.auth}/>
            <ProtectedRoute path="/Dashboard" auth={Auth.auth} component={Dashboard}/>
        </Switch>
    )
}

const ProtectedRoute =({auth, component: Component, ...rest}) =>{
    return (
        <Route 
            {...rest}
            render ={()=>auth? ( 
            <Component/>
            ):(
                <Redirect to ="/login"/>
            )}
        />

        
    )
}

const ProtectedLogin =({auth, component: Component, ...rest}) =>{
    return (
        <Route 
            {...rest}
            render ={()=> !auth? ( 
            <Component/>
            ):(
                <Redirect to ="/dashboard"/>
            )}
        />

        
    )
}

