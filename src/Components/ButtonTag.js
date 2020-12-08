import React,{ useState } from 'react'

const Button = ({ tipi }) => {
    

    return (
        tipi.map((el1,i)=>{
            return(<button className="btn btn-primary tag">{el1.name}</button> 
            ) 
          })  
    )
} 

export default Button
