import React,{useContext} from 'react'
import Dropdownblue from './DropdownBlue'
import  {DataContext} from '../Context/DataContext'
import Dropdowntariffa from './DropdownTariffa'
import DropdownDays from './DropdownDays'

const DropdownFather = () => {

    const datiJson = useContext(DataContext)

    const arr=[]

    let i=0;

    // for(i; i<=datiJson.rows.length ; i++){
    //     if(datiJson.rows[i].places[0].name !== datiJson.rows[i+1].places[0].name){
    //         arr.concat(datiJson.rows[i+1])
    //     }else{
    //         arr.push(datiJson.rows[i])
    //         arr.concat(datiJson.rows[i])
    //     }
    // }



    // for(i; i<datiJson.rows.length -1; i++){
        

    //     if(datiJson.rows[i].places[0].name !== datiJson.rows[i+1].places[0].name){
    //         if(typeof (datiJson.rows[i+1].places[0].name) !== undefined) {
    //         arr.push(datiJson.rows[i])
    //     }
    // }else{
    //     arr.push(datiJson.rows[6])
    //     arr.pop(arr[4])
    // }}
  


    
        for (let i = 0; i < datiJson.rows.length; i++) {
            if((i+1) < datiJson.rows.length) { 
                if(datiJson.rows[i].places[0].name != datiJson.rows[i+1].places[0].name){ 
                    
                    arr.push(datiJson.rows[i])
                } else{
                    arr.concat(datiJson.rows[i])

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
               

                {arr.map(el=>{
                    return <li><DropdownDays title={el.places[0].name} /></li>
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
