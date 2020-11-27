import React,{useContext} from 'react'
import Dropdownblue from './DropdownBlue'
import  {DataContext} from '../Context/DataContext'
import Dropdowntariffa from './DropdownTariffa'
import DropdownDays from './DropdownDays'

const DropdownFather = () => {

    const datiJson = useContext(DataContext)

    return (
        <div className="container">
            <ul>

            {/* <li><Dropdown title={datiJson.rows[0].places[0].name} data="20 - 21 NOVEMBRE" title2={datiJson.rows[0].days[0].name} data2={datiJson.rows[0].dayDate} image={datiJson.rows[0].days[0].images[0].image} desc={datiJson.rows[0].days[0].description} patente={datiJson.rows[0].transports[0].name}/> </li> */}
            {datiJson.rows.map((el,i) =>{
            
                return <li key={i}> <DropdownDays title={el.places[0].name}/> </li> 
                
                // return console.log(el)
                

            } )}
            
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
