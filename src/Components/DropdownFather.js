
import React,{useContext} from 'react'
import Dropdownblue from './DropdownBlue'
import  {DataContext} from '../Context/DataContext'
import Dropdowntariffa from './DropdownTariffa'
import DropdownDays from './DropdownDays'

const DropdownFather = () => {

    const datiJson = useContext(DataContext)
    
    let arr = []
 
    let j = 0
    
    function tappe() {
        for (let i = 0; i < datiJson.rows.length; i++) {    
            if((i+1) < datiJson.rows.length) {        
                if((datiJson.rows[i].places[0].name) != datiJson.rows[i+1].places[0].name){ 
                    arr.push(
                        [
                            [`${datiJson.rows[i].places[0].name}`, `${datiJson.rows[i].dayDate}`]    
                        ]
                    )  
                    
                }  
            }       
            else {
                arr.push(
                    [
                        [`${datiJson.rows[i].places[0].name}`, `${datiJson.rows[i].dayDate}`]    
                    ]
                )  
               /*  arr.push(
                    [{
                        'name': `${datiJson.rows[i].places[0].name}`,
                        'dated': `${datiJson.rows[i].dayDate}`
                    }]
                )   */
            }
        }
        return arr
    }  
        
   
    

    return (
        <div className="container">
            <ul>
            {tappe().map((el,j,elements) =>{ 
               
                 let des= []
                 for (let i = 0; i < datiJson.rows.length; i++) {  
                        if ((datiJson.rows[i].dayDate <= el[0][1])
                            && (datiJson.rows[i].places[0].name == el[0][0])){
                               if (j>0) {
                                    if(datiJson.rows[i].dayDate > elements[j-1][0][1]){
                                        des = des.concat(datiJson.rows[i]);
                                    }
                               }
                               else { 
                                        des = des.concat(datiJson.rows[i]); 
                               }
                      } 
                    }    
                    console.log(des)
                  return ( 
                    <li key={j}> <DropdownDays title={el[0][0]}
                        desc={des} />       
                    </li> 
                   
                    )
                    
            })
            }
            

        
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
