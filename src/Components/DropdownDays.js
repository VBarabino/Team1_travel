import React,{useState} from 'react'
import Accomodation from './Accomodation'
import ButtonTag from './ButtonTag'
import ImgCard from './ImgCard'
import ImgCardGallery from './ImgCardGallery'
import Transport from './Transport'
import Galleria from './Galleria'
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
                          <div class="row contday">
                            <div className="col-md-1 dots h-100">
                               dot
                               </div>
                      
                            <div className="col-md-11 p-3">
                        <div className="uppercase">
                            {el.places[0].name}
                        </div>
                        
                            <div style={{color:'#FFB400'}}><h3>{el.days[0].name}&nbsp; &nbsp;<span className="data">{el.dayDate}</span></h3></div>
                           
                            {(el.days[0].images.length) > 0 ? 
                                <div role="button">
                                <ImgCard img={el.days[0].images}  /> 
                               
                                </div>
                                    : null } 
                            
                            <div className="desday row"><p className="small-text">{el.days[0].description}</p></div>
                            {el.transports.length > 0 ? 
                             <Transport mezzo={el.transports} />
                             : null}

                            
                            {el.accomodations.length > 0 ? <Accomodation acco={el.accomodations}/> 
                                    : null } 

                         
                        
                            {el.included ? <div><i style={{backgroundColor:"#B0EED3",color:"#3ABE8A",fontSize:40,borderRadius:"100%"}} class="far fa-check-circle"></i><p style={{color:"green"}}>{el.included}</p></div> : null}
                            {el.notIncluded ? <div><i style={{backgroundColor:"#FDD1DA",color:"#BF6275",fontSize:40,borderRadius:"100%"}} class="far fa-times-circle"></i> <p style={{color:"red"}}>{el.notIncluded}</p></div> : null}
                                
                                    </div>
                                </div>
                            </div>
                    })}
                    
               

                </div>
            )}
            
        </div>
    )
}

export default DropdownDays
