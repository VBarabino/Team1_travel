// import React,{useState} from 'react'
// import Accomodation from './Accomodation'
// import Button from './Button'
// import ImgCard from './ImgCard'
// import ImgCardGallery from './ImgCardGallery'
// import '../css/dropdown.css'
// import NewTry from './NewTry'
// import CarDialog from './CarDialog'
// import HotelDialog from './HotelDialog2'


// const DropdownDays = ({title,desc}) => {
//     const [open,setOpen] = useState(false)
//     const toggle = () => setOpen(!open)


//     return (
//         <div className="dropdown-wrapper card">
//             <div className="dropdown-header" role="button" onClick={() => toggle(!open)}>
//                 <div className="dropdown-header-title">
//                     <p className="dropdown-header-title2" style={{color:'#5B5959'}}>
//                       {title}  
                      
//                     </p>

//                 </div>
//                 <div className="dropdown-header-action">
//                     <p>{open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</p>

//                 </div>

//             </div>
//             {open && (
//                 <div>
//                    {desc.map((el,i)=>{
//                        {console.log(el.accomodations)}
//                    return <div className="" key={i}>
//                            <div class="row contday">
//                             <div className="col-md-1 dots h-100">
//                                dot
//                                </div>
                      
//                             <div className="col-md-11">
//                         <div >
//                             {el.places[0].name}
//                         </div>
                        
//                             <div style={{color:'#FFB400'}}><h3>{el.days[0].name}&nbsp; &nbsp;<span className="data">{el.dayDate}</span></h3></div>
//                             {(el.days[0].images.length) > 0 ? 
//                                 <ImgCard img={el.days[0].images }  /> 
//                                     : null } 
                            
//                             <div className="desday">{el.days[0].description}</div>
//                             {el.transports.length > 0 ? 
//                             <div className="row">
//                                 <div className="col-3">
//                                 <div className="typology-transfer"><i className="fas fa-car-alt transfer-center"></i></div>
                                    
//                                 </div>
//                                 <div className="col-9">
//                                     <CarDialog tipi={el.transports}/>
                                    
//                                 </div>
//                             </div> : null}

//                             {el.accomodations.length > 0 ? <div> <Accomodation acco={el.accomodations} /> <HotelDialog tipi={el.accomodations}/> </div>
//                                     : null } 

//                             {el.included ? <div><i style={{backgroundColor:"#B0EED3",color:"#3ABE8A",fontSize:40,borderRadius:"100%"}} class="far fa-check-circle"></i><p style={{color:"green"}}>{el.included}</p></div> : null}
//                             {el.notIncluded ? <div><i style={{backgroundColor:"#FDD1DA",color:"#BF6275",fontSize:40,borderRadius:"100%"}} class="far fa-times-circle"></i> <p style={{color:"red"}}>{el.notIncluded}</p></div> : null}
//                             </div>
//                             </div>
                            
//                             </div>
//                     })}
//                 </div>
                
//             )}
            
//         </div>
//     )
// }

// export default DropdownDays


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
import Accomodation from './Accomodation'
import ButtonTag from './ButtonTag'
import ImgCard from './ImgCard'
import ImgCardGallery from './ImgCardGallery'
import Transport from './Transport'
import '../css/dropdown.css' 


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
                       {console.log(el.accomodations)}
                   return <div className="" key={i}>
                       
                        <div >
                            {el.places[0].name}
                        </div>
                        
                            <div style={{color:'#FFB400'}}><h3>{el.days[0].name}&nbsp;{el.dayDate}</h3></div>
                            {(el.days[0].images.length) > 0 ? 
                                <ImgCard img={el.days[0].images }  /> 
                                    : null } 
                            
                            <div>{el.days[0].description}</div>
                            {el.transports.length > 0 ? 
                             <Transport mezzo={el.transports} />
                             : null}

                            {/* {el.accomodations.length > 0 ? <div><img src={el.accomodations[0].images[0].image} style={{width:100}}/></div> : null} */}
                            {el.accomodations.length > 0 ? <Accomodation acco={el.accomodations}/> 
                                    : null } 

                            {/* <img  style={{width:100}} src={el.accomodations.length > 0 ? <div>{el.accomodations[0].images[0].image}</div> : null }/>  */}
                            {/* {el.accomodations.length > 0 ? el.accomodations[0].tags.length =1   ? <div>  <p>{el.accomodations[0].name}</p><p>{el.accomodations[0].description} <a href="#">Clicca qui per maggiori dettagli.</a> <button className="btn btn-primary">{el.accomodations[0].tags[0].name}</button></p></div> : el.accomodations[0].tags.length =2 ? <div>  <p>{el.accomodations[1].name}</p><p>{el.accomodations[1].description} <a href="#">Clicca qui per maggiori dettagli.</a> <button className="btn btn-primary">{el.accomodations[0].tags[0].name}</button> <button className="btn btn-primary">{el.accomodations[0].tags[1].name}</button></p></div> : null : null} */}

                            {/* {el.accomodations.length > 1 && el.accomodations[0].tags.length > 2 ? <div>  <p>{el.accomodations[1].name}</p><p>{el.accomodations[1].description} <a href="#">Clicca qui per maggiori dettagli.</a> <button className="btn btn-primary">{el.accomodations[0].tags[0].name}</button><button className="btn btn-primary">{el.accomodations[0].tags[1].name}</button><button className="btn btn-primary">{el.accomodations[0].tags[2].name}</button></p></div> : null } */}
                            {/* {el.accomodations.length > 0 ? <p>{el.accomodations[0].description} <a href="#">Clicca qui per maggiori dettagli.</a></p> : null} */}
                            {/* {el.accomodations.length > 0 && el.accomodations[0].tags.length > 1 ? <div><button className="btn btn-primary">{el.accomodations[0].tags[0].name}</button><button className="btn btn-primary">{el.accomodations[0].tags[1].name}</button></div> : null} */}
                            {el.included ? <div><i style={{backgroundColor:"#B0EED3",color:"#3ABE8A",fontSize:40,borderRadius:"100%"}} class="far fa-check-circle"></i><p style={{color:"green"}}>{el.included}</p></div> : null}
                            {el.notIncluded ? <div><i style={{backgroundColor:"#FDD1DA",color:"#BF6275",fontSize:40,borderRadius:"100%"}} class="far fa-times-circle"></i> <p style={{color:"red"}}>{el.notIncluded}</p></div> : null}
                            {/* {(el.accomodations[0].tags.length) > 0 ?
                        <Button tipi={el.accomodations[0].tags} />
                    
                        : null }  */}

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
