import React, { useContext } from 'react'
import { DataContext } from '../Context/DataContext'
import '../index.css'

function Footer(prop){
    const datiJson = useContext(DataContext)
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-8 d-flex align-items-center">
                        <p>Insolita gne gne1</p>
                        <img className="logo-footer" key={datiJson.agency.image} src={datiJson.agency.image} />
                    </div>
                    <div className="col-4">
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