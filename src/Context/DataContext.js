import React, { useState , createContext , useEffect} from 'react'

export const DataContext = createContext()

const DataContextProvider = (props) => {

    const [datiJson , setDatiJson] = useState ({})

    const api='http://51.77.82.133:86/api/quotations/QUO_5fb3acb3a0f18'

    useEffect(() => {
      const getDati = async() =>{
        const res = await fetch(api)
        const data = await res.json()
        return setDatiJson(data.results.data)
       
      }
      getDati()
    }, [api])
   
  
    return (
      <DataContext.Provider value={{datiJson}}>
          {props.children}
      </DataContext.Provider>
    )
  }
  export default DataContextProvider
