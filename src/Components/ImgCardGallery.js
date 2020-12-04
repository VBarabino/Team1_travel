import React,{ useState } from 'react'

const ImgCardGallery = ({ img2}) => {


    return (
        img2.map((el1,i)=>{
            return(<img src={el1.image} style={{width:200}}/>)
          })  
    )
}

export default ImgCardGallery
