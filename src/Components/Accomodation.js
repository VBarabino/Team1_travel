import React,{ useState } from 'react'
import ImgCardGallery from './ImgCardGallery'
import Button from './Button'
import NewTry from './NewTry'
import HotelDialog2 from './HotelDialog2'

const Accomodation = ({acco}) => {


    return (
        acco.map((el2,i)=>{
            console.log(el2)
            return(<>
            <div>
                <NewTry tipi={acco}/>
                <ImgCardGallery img2={el2.images}/>
                {/* <HotelDialog2  tipi={acco}/> */}
                
                {/* <div>{el2.name}</div>
                <div>
                    {el2.description}
                </div>
                <div><a href='#'>Clicca qui per maggiori dettagli</a></div>
                <Button tipi={el2.tags} /> */}
                </div>
                
                </>)
            
          })  
    )
}

export default Accomodation
