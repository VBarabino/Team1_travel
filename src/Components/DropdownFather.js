import React,{useContext} from 'react'
import Dropdownblue from './DropdownBlue'
import  {DataContext} from '../Context/DataContext'
import Dropdowntariffa from './DropdownTariffa'

const DropdownFather = () => {

    const datiJson = useContext(DataContext)

    return (
        <div className="container">
            <ul>
            
            <li> <Dropdowntariffa title="Tariffe" totalprice={datiJson.priceTotal} partecipanti={datiJson.partecipants} included={datiJson.included} notincluded={datiJson.notIncluded}/></li>
            
           <li> <Dropdownblue title={datiJson.documentsRequested.name} item={datiJson.documentsRequested.description}/></li>
           
           <li> <Dropdownblue title={datiJson.documentsInsurance.name} item={datiJson.documentsInsurance.description} /></li>
         
            <li><Dropdownblue title={datiJson.documentsCancellation.name} item={datiJson.documentsCancellation.description}/></li>

            <li><Dropdownblue title={datiJson.documentsPayment.name} item={datiJson.documentsPayment.description}/></li>

            <li><Dropdownblue title={datiJson.documentsCarRental.name} item={datiJson.documentsCarRental.description}/></li>
          

            </ul>
        </div>
    )
}

export default DropdownFather
