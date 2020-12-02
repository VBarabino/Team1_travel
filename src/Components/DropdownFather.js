import React,{useContext} from 'react'
import Dropdownblue from './DropdownBlue'
import  {DataContext} from '../Context/DataContext'
import Dropdowntariffa from './DropdownTariffa'
import DropdownDays from './DropdownDays'
import Timeline from './Timeline'

const DropdownFather = () => {

    const datiJson = useContext(DataContext)

    let arr=[]
    let arr2=[]

    let i=0;


        for (let i = 0; i < datiJson.rows.length; i++) {
            if((i+1) < datiJson.rows.length) { 
                if(datiJson.rows[i].places[0].name != datiJson.rows[i+1].places[0].name){ 
                    arr.push(datiJson.rows[i])
                } else{
                    arr2.push(datiJson.rows[i+1])

                }
            }    
            else {
                arr.push(datiJson.rows[i])
            }
        }
        console.log(arr) 

      
          
    

    return (
        <div className="container">
            <ul>
            
            {console.log(arr,arr2)}

                {arr.map((el,i)=>{
                    return <li key={el.id}><DropdownDays title={el.places[0].name} date={el.dayDate} i={i}/> </li>
                })}
        
                      
            <li><Dropdowntariffa title="Tariffe" totalprice={datiJson.priceTotal} partecipanti={datiJson.partecipants} included={datiJson.included} notincluded={datiJson.notIncluded}/></li>
            
            <li><Dropdownblue title={datiJson.documentsRequested.name} item={datiJson.documentsRequested.description}/></li>
           
            <li><Dropdownblue title={datiJson.documentsInsurance.name} item={datiJson.documentsInsurance.description} /></li>
         
            <li><Dropdownblue title={datiJson.documentsCancellation.name} item={datiJson.documentsCancellation.description}/></li>

            <li><Dropdownblue title={datiJson.documentsPayment.name} item={datiJson.documentsPayment.description}/></li>

            <li><Dropdownblue title={datiJson.documentsCarRental.name} item={datiJson.documentsCarRental.description}/></li>
          

            </ul>
        </div>
    )
}

export default DropdownFather



// {
//     {name: Siracura, 
//    dettagli:{
//         
//         giorno:{
//              day: 21
//              tappa: ecc    
//              } 
//              giorno...
//              
//  }
//{ name: 
//
//}
//        
// }