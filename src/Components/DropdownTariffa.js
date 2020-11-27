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
                <p className="dropdown-list">
                    <ul>
                    <li>{partecipanti[0].type} {partecipanti[0].price}€</li>
                    <li>{partecipanti[1].type} {partecipanti[1].price}€</li>
                    <li>{partecipanti[2].type} {partecipanti[2].price}€</li>
                    <li>{partecipanti[3].type} {partecipanti[3].price}€</li>
                    </ul>
                    <hr />
                    {totalprice}
                    
                    <h3>COSA COMPRENDE IL PREZZO</h3>
                    <p>{included}</p>

                    <h3>COSA NON COMPRENDE IL PREZZO</h3>
                    <p>{notincluded}</p>

                </p>
            )}
            
        </div>
    )
}

export default DropdownTariffa
