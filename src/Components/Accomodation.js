import React,{ useState } from 'react'
import ImgCardGallery from './ImgCardGallery'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import ButtonTag from './ButtonTag'

const Accomodation = ({acco}) => {

    const [curr,setCurr] = useState(undefined)
    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=(e, id ) =>{
     let curr = id;
     setCurr(id)
     
    console.log("metodo", curr)
    console.log("test",e.target)
      setShow(true)
      
       
    }

    return (
        acco.map((el2,i)=>{
            console.log(el2)
            return(
            <div>
                
            <div  key={el2.id} >
              {console.log(el2.id)}
              
              <ImgCardGallery img2={el2.images}/> 
                
                <div role="button" onClick={e=>handleShow(e,el2.id)}>
                <div>{el2.name}</div>
                <div>
                    {el2.description}
                </div>
                <div><a href='#'>Clicca qui per maggiori dettagli</a></div>
                <ButtonTag tipi={el2.tags} />
                
                </div>
                </div>
                

    {el2.id == curr ? 
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{el2.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <>
              <div>{el2.typology}</div>
              <div><ImgCardGallery img2={el2.images}/></div>
              <p style={{margin: 10}}>Descrizione</p>
              <div>{el2.description}</div>
              <p style={{margin: 10}}>Ristorante</p>
              <div>{el2.descriptionRestaurant}</div>
              <p style={{margin: 10}}>Camere</p>
              <div>{el2.descriptionRooms}</div>
              <p style={{margin: 10}}>Servizi</p>
              <div>{el2.descriptionServices}</div>
          </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Chiudi
        </Button>
      </Modal.Footer>
    </Modal> : null }

      
            
                </div>)
            
          })  
    )
}

export default Accomodation
