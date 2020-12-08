import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function NewTry({tipi}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
         {tipi.length > 1 && tipi[0].tags.length > 2 ? <div>
      <div role="button" variant="outlined" color="primary" onClick={handleClickOpen}>
            <p>{tipi[1].name}</p>
             <p>{tipi[1].description} 
               <a href="#">Clicca qui per maggiori dettagli.</a>
              <button className="btn btn-primary">{tipi[0].tags[0].name}</button>
             <button className="btn btn-primary">{tipi[0].tags[1].name}</button>
               <button className="btn btn-primary">{tipi[0].tags[2].name}</button>
                 </p>
                
          </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{tipi[1].name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <hr />
            <strong>hotel</strong> <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i> <br /> <br />
            <div className="row">
            {tipi[1].images.map(el =>{
                return <div className="col-md-4"><img src={el.image} style={{width:'100%',height:120}}/> <br /> <br /></div>
            })}
            </div>
            {/* <img src={tipi[1].images[0].image} style={{width:100}}  /> <br /> <br /> */}
           <strong> Descrizione:</strong>
           <p>{tipi[1].description} </p> <br />
           <strong>Ristorante:</strong>
            <p>{tipi[1].descriptionRestaurant}</p> <br />
            <strong>Camere:</strong>
            <p>{tipi[1].descriptionRooms}</p> <br />
            <strong>Servizi:</strong>
            <p>{tipi[1].descriptionServices}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Chiudi
          </Button>
        </DialogActions>
      </Dialog>
      </div>
     : null} 
      </div>
  );
}