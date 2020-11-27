import React,{ useContext } from 'react'
import  {DataContext} from '../Context/DataContext'
import '../index.css'


function AgencyDesc() {
    const datiJson = useContext(DataContext)
    return (
        <div className="container">
        <div className="card">
            <div className="row">
                <div className="col-lg-4 col-md-12">
                <img src={datiJson.operator.image} style={{width:238}}/>
            </div>
            <div className="col-lg-3 col-md-12">
                <ul>
                    <li style={{listStyle:'none'}}><h3>{datiJson.operator.name}</h3></li>
                   
                    <p className="lista1" style={{listStyle:'inside'}}> Il tuo agente di viaggio</p>
                    <li className="lista1" href='#'><i className="fas fa-phone"></i> {datiJson.operator.contact.phone}</li>
                    <li className="lista1"><i className="fas fa-envelope"></i> {datiJson.operator.contact.email}</li>
                </ul>
            </div>
        
            <div className="col-lg-5 col-md-12 pdl">
                <img src={datiJson.agency.image} style={{width:100, marginBottom:5}} />
                <br/>
                <p className="lista1">Insolita Travels | Sicily DMC &amp; Travel Agency<br/> (Licence nr. 2226/s2-Turl)<br/>
                    Viale della Gioventù, 26 A - 95014 Giarre (Catania)<br/>
                    www.insicilia.it
                </p>
               {/*  <ul style={{marginTop:5}}>
                    <li className="lista1">- Insolita Travels di InSicilia snc: Tour Operator Sicilia, DMC e Agenzia di Viaggi;</li>
                    <li className="lista1">- Licenza Agenzia Viaggio nr. 2226/S2-TUR della Regione Siciliana;</li>
                    <li className="lista1">- Polizza R.C. nr. 45130310-RC14 Europaische Reiserversicherung AG;</li>
                    <li className="lista1">- InSicilia snc è iscritta all'Ufficio Registro Imprese di Catania N. REA 260386;</li>
                    <li className="lista1">- Fondo Garanzia Viaggi: Certificato n. A/286.1059/1/R;</li>
                </ul> */}
            </div>
        </div>
    </div>
    </div>
    )
}

export default AgencyDesc