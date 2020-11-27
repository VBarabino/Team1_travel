import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import '../index.css'

function Footer(prop){
    const datiJson = useContext(DataContext)
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-8 d-flex flex-column align-items-start">
                        <p>Insolita Travels | Sicily DMC &amp; Travel Agency<br/> (Licence nr. 2226/s2-Turl)<br/>
                    Viale della Gioventù, 26 A - 95014 Giarre (Catania)<br/>
                    www.insicilia.it</p>
                        <img className="logo-footer" key={datiJson.agency.image} src={datiJson.agency.image} />
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <button className="btn white-button ">
                            <i className="fas fa-arrow-down mr-2"></i>
                            <p className="text-uppercase m-0">Download</p>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer