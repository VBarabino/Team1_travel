import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ImgCard = ({ img }) => {
    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const [curr,setCurr]=useState(undefined)
    const handleClick = (e , id) => {
        setCurr(id)
        setShow(true)
    }

    

    return (
        img.map((el1,i)=>{
            return(
                <>
                <div role="button" onClick={e=>handleClick(e,el1.id)}>
                    <img src={el1.image} style={{width:'100%'}}/>
                </div>
                 
                {el1.id == curr ? 
                
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                    
                     <>

                     <div >
                         <img src={el1.image} style={{width:"100%"}}/>  
                     </div>
                     </>
                    </>
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button variant="secondary" onClick={handleClose}>
                    Chiudi
                  </Button> */}
                </Modal.Footer>
              </Modal>
               :  null }
                </>)
          })  
    )
} 

export default ImgCard