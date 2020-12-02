import React,{ useState , useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import Timeline from '../Components/Timeline'

const DropdownDays = ({title , date , i}) => {
    const [open,setOpen] = useState(false)
    const toggle = () => setOpen(!open)



    const datiJson = useContext(DataContext)
    const arrTimeline=[]


    for(let i=0; i < datiJson.rows.length; i++){
        if(datiJson.rows[i].id ){
        arrTimeline.push(datiJson.rows[i].days[0].name)
    }

    }


    return (
        <div className="dropdown-wrapper card">
            <div className="dropdown-header" role="button" onClick={() => toggle(!open)}>
                <div className="dropdown-header-title">
                    <p className="dropdown-header-title2" style={{color:'#333333'}}>
                      {title} &nbsp; {date}
                      
                    </p>

                </div>
                <div className="dropdown-header-action">
                    <p>{open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</p>

                </div>

            </div>
            {open && (
                <>
                {/* <ul>

                {arrTimeline.map((el,i) =>{
                    return <li key={el}><Timeline day={datiJson.rows[i].days[0].name} /></li>
                })}
                </ul>
                 */}

                 <Timeline day={datiJson.rows[i].days[0].name}/>
                 

                
              
                  
                   
                    
                </>
            )}
            
        </div>
    )
}

export default DropdownDays
