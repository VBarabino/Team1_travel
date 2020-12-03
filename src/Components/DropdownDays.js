// import React,{ useState , useContext } from 'react'
// import { DataContext } from '../Context/DataContext'
// import Timeline from '../Components/Timeline'

// const DropdownDays = ({title , date , i}) => {
//     const [open,setOpen] = useState(false)
//     const toggle = () => setOpen(!open)



//     const datiJson = useContext(DataContext)
//     const arrTimeline=[]


//     for(let i=0; i < datiJson.rows.length; i++){
//         if(datiJson.rows[i].id ){
//         arrTimeline.push(datiJson.rows[i].days[0].name)
//     }

//     }


//     return (
//         <div className="dropdown-wrapper card">
//             <div className="dropdown-header" role="button" onClick={() => toggle(!open)}>
//                 <div className="dropdown-header-title">
//                     <p className="dropdown-header-title2" style={{color:'#333333'}}>
//                       {title} &nbsp; {date}
                      
//                     </p>

//                 </div>
//                 <div className="dropdown-header-action">
//                     <p>{open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</p>

//                 </div>

//             </div>
//             {open && (
//                 <>
//                 {/* <ul>

//                 {arrTimeline.map((el,i) =>{
//                     return <li key={el}><Timeline day={datiJson.rows[i].days[0].name} /></li>
//                 })}
//                 </ul>
//                  */}

//                  <Timeline day={datiJson.rows[i].days[0].name}/>
                 

                
              
                  
                   
                    
//                 </>
//             )}
            
//         </div>
//     )
// }

// export default DropdownDays



import React,{useState} from 'react'

const DropdownDays = ({title,desc}) => {
    const [open,setOpen] = useState(false)
    const toggle = () => setOpen(!open)


    return (
        <div className="dropdown-wrapper card">
            <div className="dropdown-header" role="button" onClick={() => toggle(!open)}>
                <div className="dropdown-header-title">
                    <p className="dropdown-header-title2" style={{color:'#333333'}}>
                      {title}  
                      
                    </p>

                </div>
                <div className="dropdown-header-action">
                    <p>{open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</p>

                </div>

            </div>
            {open && (
                <div>
                   {desc.map((el,i)=>{
                       
                   return <div className="card" key={i}>
                        <div>
                            {el.places[0].name}
                        </div>
                        
                   <div>{el.days[0].name}&nbsp;{el.dayDate}</div>
                   <div ><img style={{width:100}} src={el.days[0].images[0].image } /></div>
                   <div>{el.days[0].description}</div>
                   {el.transports.length > 0 ? 
                        <div className="row">
                            <div className="col-3">
                                <i className="fas fa-car-alt"></i>
                            </div>
                            <div className="col-9">
                                <div>{el.transports[0].name}</div>
                                <div> LUOGO DI RITIRO {el.transports[0].pickup.name}</div>
                                <div>LUOGO DI RILASCIO {el.transports[0].return.name}</div>
                            </div>
                        </div> : null}

                        {el.accomodations.length > 0 ? <div><img src={el.accomodations[0].images[0].image} style={{width:100}}/></div> : null}
                        
                        {/* <img  style={{width:100}} src={el.accomodations.length > 0 ? <div>{el.accomodations[0].images[0].image}</div> : null }/>  */}
                        {el.accomodations.length > 0 ? <div>{el.accomodations[0].name}</div> : null }
                        {el.accomodations.length > 0 ? <p>{el.accomodations[0].description} <a href="#">Clicca qui per maggiori dettagli.</a></p> : null}
                        {el.accomodations.length > 0 && el.accomodations[0].tags.length ? <div><button className="btn btn-primary">{el.accomodations[0].tags[0].name}</button><button className="btn btn-primary">{el.accomodations[0].tags[1].name}</button></div> : null}
                        {el.included ? <p style={{color:"green"}}>{el.included}</p> : null}
                        {el.notIncluded ? <p style={{color:"red"}}>{el.notIncluded}</p> : null}
                        
                        </div>
                   })}
                
                   {/* {desc[0].places[0].name}  */}
                {/* <p className="dropdown-list">
                    {title} <br />
                    {title2} {data2}
                </p>
                <img  src={image} alt="image"/>
                <p>{desc}</p>
                <i class="fas fa-car"></i>
                {patente} */}

                </div>
            )}
            
        </div>
    )
}

export default DropdownDays
