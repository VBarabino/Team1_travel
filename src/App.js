import React,{ useState , useEffect } from 'react'
import './App.css';
import './index.css';
import LoginForm from './Components/LoginForm';
import HeaderSito from './Components/HeaderSito'
import DataContextProvider from './Context/DataContext';






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
  
  // const [datiJson , setDatiJson] = useState ({})

  // useEffect(() => {
  //   const getDati = async() =>{
  //     const dati = await fetch(api).then(res => res.json())
  //     // return setDatiJson(dati.results.data)
  //     return console.log(dati.results.data)
  //   }
  //   getDati()
  // }, [api])
 
  // fetch(api)
  // .then(response => response.json())
  // .then(data => console.log(data));
  

// const getData = () => {
//     fetch(api)
//       .then(res => res.json())
//       .then(res => {
//         console.log(res)
//         return getData()
//       })
//       .catch(err => {})
//   }


// const fetchingData = async () =>{
//   const res = await fetch(api)
//   const data = await res.json()
//   return data
//   }
  
//   fetchingData()
//   .then( data => console.log(data))
//   .catch(error => console.log(error))


  return (
    <>
    <DataContextProvider>
    <div className="App">
    
    {(user.email != "") ? (
      <div className="logged">
        <h2>Welcome,{user.name}</h2>
        <button onClick={logout}>Logout</button>
         <HeaderSito /> 
      </div>
    ) : (
      <LoginForm Login={login} Error={error}/>
    )}
    </div>
    </DataContextProvider>

    </>
  );
}

export default App;
