import React,{ useState } from 'react'

const DropdownTariffa = ({ title , totalprice ,  partecipanti , included , notincluded}) => {
    const [open,setOpen] = useState(false)
    const toggle = () => setOpen(!open)


    return (
        <div className="dropdown-wrapper card">
            <div className="dropdown-header" role="button" onClick={() => toggle(!open)}>
                <div className="dropdown-header-title">
                    <p className="dropdown-header-title2">
                        {title}
                    </p>

                </div>
                <div className="dropdown-header-action">
                    <p>{open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}</p>

                </div>

            </div>
            {open && (
                <div className="dropdown-list">
                    <div className="row">
                        <div className="col-md-4">{partecipanti[0].type}</div>
                        <div className="col-md-8 text-right">{partecipanti[0].price}€</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">{partecipanti[1].type}</div>
                        <div className="col-md-8 text-right">{partecipanti[1].price}€</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">{partecipanti[2].type}</div>
                        <div className="col-md-8 text-right">{partecipanti[2].price}€</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">{partecipanti[3].type}</div>
                        <div className="col-md-8 text-right">{partecipanti[3].price}€</div>
                    </div>
                    
                   
                    <hr />
                    {totalprice}
                    
                    <h3>COSA COMPRENDE IL PREZZO</h3>
                    <p>{included}</p>

                    <h3>COSA NON COMPRENDE IL PREZZO</h3>
                    <p>{notincluded}</p>
                </div>
            )}
            
        </div>
    )
}

export default DropdownTariffa
