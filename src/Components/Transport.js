import React,{ useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Transport = ({ mezzo }) => {
    
    const [show, setShow] = useState(false);

    const handleClose=()=>setShow(false);
    const handleShow=() =>setShow(true);

    return (
        mezzo.map((el6,i)=>{
            return(
            <>
                <div className="row" onClick={handleShow}>
                                <div className="col-3">
                                    <div className="typology-transfer"><i className="fas fa-car-alt transfer-center"></i></div>                                   
                                </div>
                                <div className="col-9">
                                <div className="title-transfer">{el6.name}</div>
                                    <div className="row mt-2">
                                    <div className="col-md-5"><span className="luogo">LUOGO DI RITIRO</span></div> 
                                    <div className="col-md-7"><a className="btn btn-primary aereoporto" href="#">{el6.pickup.name}</a></div>
                                    </div>
                                    <div className="row mt-2">
                                    <div className="col-md-5"> <span className="luogo">LUOGO DI RILASCIO</span> </div>
                                    <div className="col-md-7"><a className="btn btn-primary aereoporto" href="#">{el6.return.name}</a></div>
                                    </div> 
                                </div>
                                </div>
                                <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>{el6.name}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <>
                                        <i className="fas fa-car-alt" id="carModal"></i>
                                        <p>Tipologia Auto {el6.typology_auto}</p>
                                        <div> Luogo di ritiro: <a href="#">{el6.pickup.name}</a></div>
                                        <div>Data di ritiro:<a href="#">{el6.withdrawalDate}</a></div>
                                        <div>Luogo di Rilascio: <a href="#">{el6.return.name}</a></div>
                                        <div>Data di rilascio: <a href="#">{el6.releaseDate}</a></div>
                                        <p style={{margin:10}}> IL NOLEGGIO AUTO COMPRENDE  </p>
                                        <ul>
                                        <li>{el6.rentIncluded}</li>
                                        </ul>
                                        <div>SITO WEB <a href="#">{el6.contact.website}</a></div>
                                        
                                    </>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                </Modal.Footer>
                            </Modal>
            </>
            )
          })  
    )
} 

export default Transport