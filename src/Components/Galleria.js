import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const Galleria = ({ img }) => {
    const [show, setShow] = useState(false);
    const handleClose=()=>setShow(false);
    const [curr,setCurr]=useState(undefined)
    const handleClick = (e , id) => {
        setCurr(id)
        setShow(true)




    }
    
        return(
            img.map((el1,i)=>{
                return(
                    <>
                <img src={el1.image} role="button" onClick={e => handleClick(e,el1.id)} style={{width:150,display:"inline"}}/>
                
                {el1.id == curr ? 
                
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <>
                    
                     <>

                     <div >
                         <img src={el1.image} style={{width:"100%",height:"auto"}}/>  
                     </div>
                     </>
                    </>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
              </Modal>
               :  null }


                </>
       
            )

            
    

                }))}

export default Galleria
