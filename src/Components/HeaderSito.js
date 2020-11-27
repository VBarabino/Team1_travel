import React,{ useContext } from 'react'
import  {DataContext} from '../Context/DataContext'
import '../index.css'




function HeaderSito(prop) {
    const datiJson = useContext(DataContext)
//    const Background = datiJson.datiJson.images[0].image
    const Background = 'https://i1.wp.com/images.liveuniversity.it/sites/2/2020/06/vacanze-in-sicilia-voucher-turisti-scaled.jpg'
    return (
        <div>
            {console.log(datiJson)}
            
           {/* <div style={{backgroundImage: `url(${Background})`}} className="bgtop">
            <img className="logo" src={datiJson.agency.image} className="logo"/> 
            <div className="headertext text-right">
                <p className="per">per {prop.username}</p>
                    <h1 className="titolo">{datiJson.title}</h1>
                <button className="btn btn-primary">Scopri di più</button>
            </div>
        </div> */}
        </div>
    )
}

export default HeaderSito