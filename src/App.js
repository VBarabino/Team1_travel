import React,{ useState , useEffect, useContext } from 'react'
import './App.css';
import './index.css';
import LoginForm from './Components/LoginForm';
import HeaderSito from './Components/HeaderSito'
import AgencyDesc from './Components/AgencyDesc'
import Footer from './Components/Footer'
import DataContextProvider, { DataContext } from './Context/DataContext';
import Dropdownblue from './Components/DropdownBlue'
import DropdownFather from './Components/DropdownFather'





function App() {
  const adminUser = {
    email:"team1@team1.com",
    password:"team1"
  }
  const [ user , setUser ] = useState({name:"",email:""})
  const [ error , setError ] = useState("")

 

  const login = details => {
    
    if(details.email == adminUser.email && details.password == adminUser.password){
      setUser({
        name:details.name,
        email:details.email,
        password:details.password
      })
    }else{
      setError("E-mail o password errata")
    }

  }

  const logout = () =>{
    setUser({
      name:"",
      email:""
    })

    
  }
  
  return (
    <>
    
    
    <div>
    {(user.email != "") ? (
     <DataContextProvider>
       
      <div className="logged">
        <div className ="topbar">
          <h2 className="welcome">Benvenuto,{user.name}</h2>
          <button onClick={logout} className="logout btn btn-primary">Logout</button>
        </div>
        
         <HeaderSito username={user.name}/> 
         {/* MAPPA QUI */}
         <AgencyDesc />
         <DropdownFather />
         <Footer/>
         
        
         </div>

         </DataContextProvider>
         
         
         
      
    ) : (
      <div className="App">
      <LoginForm Login={login} Error={error}/>
      </div>
    )}
    </div>
    

    </>
  );
}

export default App;
