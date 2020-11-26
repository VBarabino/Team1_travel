import React,{ useContext } from 'react'
import  {DataContext} from '../Context/DataContext'
import '../index.css'


function AgencyDesc() {
    const datiJson = useContext(DataContext)
    return (
        <div className="container">
        <div className="card">
        <div className="row">
            <div className="col-2">
        <img src={datiJson.datiJson.operator.image} style={{width:200,height:200,marginTop:70,marginLeft:20}}/>
        </div>
        <div className="col">
        
        <ul style={{marginLeft:60,marginTop:70}}>
            <li style={{listStyle:'none'}}><h3>{datiJson.datiJson.operator.name}</h3></li>
            <p className="lista1" style={{listStyle:'inside'}}>Il tuo agente di viaggio</p>
            <li className="lista1" href='#'><i className="fas fa-phone"></i>{datiJson.datiJson.operator.contact.phone}</li>
            <br />
            <li className="lista1"><i className="fas fa-envelope"></i>{datiJson.datiJson.operator.contact.email}</li>
            <li className="lista1"><i className="fas fa-home"></i></li>
        </ul>
        </div>
        <hc/>
        <div className="col">
        <img src={datiJson.datiJson.agency.image} style={{width:100,marginTop:70}} />
        <ul style={{marginTop:10}}>
            <li className="lista1">- Insolita Travels di InSicilia snc: Tour Operator Sicilia, DMC e Agenzia di Viaggi;</li>
            <li className="lista1">- Licenza Agenzia Viaggio nr. 2226/S2-TUR della Regione Siciliana;</li>
            <li className="lista1">- Polizza R.C. nr. 45130310-RC14 Europaische Reiserversicherung AG;</li>
            <li className="lista1">- InSicilia snc è iscritta all'Ufficio Registro Imprese di Catania N. REA 260386;</li>
            <li className="lista1">- Fondo Garanzia Viaggi: Certificato n. A/286.1059/1/R;</li>
        </ul>
        </div>
        </div>
        
    </div>
    </div>
    )
}

export default AgencyDesc