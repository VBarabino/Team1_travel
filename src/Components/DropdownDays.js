import React,{useState} from 'react'

const DropdownDays = ({title}) => {
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
