import React,{ useState } from 'react'

const ImgCard = ({ img }) => {
    

    return (
        img.map((el1,i)=>{
            return(
            <img src={el1.image} style={{width:'100%'}}/>)
          })  
    )
} 

export default ImgCard