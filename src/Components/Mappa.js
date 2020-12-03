import React, { useContext } from 'react'
import L from 'leaflet'
import MapIcon from '../Static/Icons/MapIcon.png'
import { MapContainer , TileLayer , Marker , Popup } from 'react-leaflet'
import { DataContext } from '../Context/DataContext'
import '../index.css'





const Mappa = () => {

    let leafletIcon = L.icon({
        iconUrl:MapIcon,
        iconSize:[30,30],
        

    })

    const datiJson = useContext(DataContext)

    const position=[datiJson.rows[0].places[0].position.coords[0],datiJson.rows[0].places[0].position.coords[1]]

    const locations=[
        {"name":"Siracusa","position":[datiJson.rows[0].places[0].position.coords[0],datiJson.rows[0].places[0].position.coords[1]]},
        {"name":"Vendicari","position":[datiJson.rows[2].places[0].position.coords[0],datiJson.rows[2].places[0].position.coords[1]]},
        {"name":"Catania","position":[datiJson.rows[6].places[0].position.coords[0],datiJson.rows[6].places[0].position.coords[1]]},

    ]

    let i=2;
    let b=0;
    let c=0;
    let d=[];
    let e=[];

    for (let a = 0; a < datiJson.partecipants.length; a++) {
        if(datiJson.partecipants[a].type ==  "adulto"){
            b++;
           
            
        }
        if(datiJson.partecipants[a].type ==  "adolescente"){
            c++;
        }}
    
       const controlla = () =>{
           if(b>1){
              d.push("adulti")
           }else{
               d.push("adulto")
           }
       }

       const controlla2 = () =>{
        if(c>1){
           e.push("adolescenti")
        }else{
            e.push("adolescente")
        }
    }
        



   
   

    return (
        
        <div className="container">
            {controlla(),controlla2()}
            <div className="card">
                <MapContainer className="map"
                center={position}
                zoom={6}
                style={{height:300,widht:100}}
                >
                    <TileLayer attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>


                   {locations.map(location =>{
                      return <Marker position={location.position} icon={leafletIcon}>
                           <Popup>
                               {location.name}
                           </Popup>
                       </Marker>
                   })}
                    

                </MapContainer>
                

                
                
                <h2>{datiJson.title}</h2>
                <p>{datiJson.rows[0].places[0].name}&gt;{datiJson.rows[2].places[0].name}&gt;{datiJson.rows[6].places[0].name}</p>
                <p><i className="fas fa-long-arrow-alt-right"></i> Dal {datiJson.dateFrom} al {datiJson.dateTo}</p>
                
                {/* <p><i class="fas fa-long-arrow-alt-right"></i> {b} {datiJson.partecipants[0].type} <i class="fas fa-long-arrow-alt-right"></i> {c} {datiJson.partecipants[2].type}  </p> */}
                <p><i className="fas fa-long-arrow-alt-right"></i> {datiJson.days} Giorni - {datiJson.days -1} Notti</p>

                <p><i className="fas fa-long-arrow-alt-right"></i> {b}&nbsp;{d}<i class="fas fa-long-arrow-alt-right"></i> {c}&nbsp;{e}  </p>
                
               
             
            </div>
        </div>
    )
}

export default Mappa
