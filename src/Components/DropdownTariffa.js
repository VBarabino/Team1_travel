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
                    <div className="row mt-3">
                        <div className="col-md-4 uppercase">{partecipanti[0].type}</div>
                        <div className="col-md-8 text-right text-grey">{partecipanti[0].price}€</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 uppercase">{partecipanti[1].type}</div>
                        <div className="col-md-8 text-right text-grey">{partecipanti[1].price}€</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 uppercase">{partecipanti[2].type}</div>
                        <div className="col-md-8 text-right text-grey">{partecipanti[2].price}€</div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 uppercase">{partecipanti[3].type}</div>
                        <div className="col-md-8 text-right text-grey">{partecipanti[3].price}€</div>
                    </div>
                    
                   
                    <hr />
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <strong>TOTALE</strong><br />
                            {/* funzione per mettere totale giusto */}
                            <span className="text-yellow">{totalprice}</span> 
                        </div>
                    </div>
                    
                    <div className="row mt-3">
                        <div className="col-md-12">
                            <h3 className="text-yellow">COSA COMPRENDE IL PREZZO</h3>
                            <p className="small-text ws">{included}</p>

                            <h3 className="text-yellow">COSA NON COMPRENDE IL PREZZO</h3>
                            <p className="small-text ws">{notincluded}</p>
                        </div>
                    </div>
                </div>
            )}
            
        </div>
    )
}

export default DropdownTariffa
