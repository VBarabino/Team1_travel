import React, { useEffect , useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import DataContextProvider from './Context/DataContext';
import Cookies from 'js-cookie'
import LoginForm from './Components/LoginForm';
import HeaderSito from './Components/HeaderSito'
import AgencyDesc from './Components/AgencyDesc'
import Footer from './Components/Footer'
import DropdownFather from './Components/DropdownFather'
import Mappa from './Components/Mappa'

//import AuthApi from "./Component/AuthApi"
import AuthApi from './Components/AuthApi'
export default function App() {
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
    const [ error , setError ] = useState("")
    const adminUser = {
        email:"team1@team1.com",
        password:"team1"
      }
    const Auth = React.useContext(AuthApi)
    const handleOnClick = (details) =>{
        if(details.email === adminUser.email && details.password === adminUser.password){Auth.setAuth(true);}else{setError("E-mail o password errata")}
        
        Cookies.set("user","loginTrue")
    }
    return(
        <div className="App">
    <LoginForm Login={handleOnClick} Error={error}/> 
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
          <h2 className="welcome">Benvenuto</h2>
          <button onClick={handleOnClick} style={{backgroundColor:'#FFB700',height:40,borderRadius:"10%"}} className="logout btn btn-primary">Logout</button>
        </div>
         <HeaderSito />
         <Mappa />
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
            <Route path="/"><Redirect to="/login" /></Route>
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
        <>
        <Route 
            {...rest}
            render ={()=> !auth? ( 
                <>
                    
                    <Component/>
                 </>
            ):(
                <Redirect to ="/dashboard"/>
            )}
        /> 
        
        </>

        
    )
}

