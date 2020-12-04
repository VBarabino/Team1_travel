import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function ResponsiveDialog({tipi}) {
  const [open,setOpen] = React.useState(false)
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <div role="button" variant="outlined" color="primary" onClick={handleClickOpen}>
     <div>
       {tipi.length > 1 && tipi[0].tags.length > 2 ? 
       <div>
            <p>{tipi[1].name}</p>
             <p>{tipi[1].description} 
               <a href="#">Clicca qui per maggiori dettagli.</a>
              <button className="btn btn-primary">{tipi[0].tags[0].name}</button>
             <button className="btn btn-primary">{tipi[0].tags[1].name}</button>
               <button className="btn btn-primary">{tipi[0].tags[2].name}</button>
                 </p>
          </div>
                 
                 : null }  
                 {tipi.length > 1 && tipi[0].tags.length > 2 ? 
                 <div>
                     <Dialog
                  fullScreen={fullScreen}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="responsive-dialog-title"
                >
                  <DialogTitle id="responsive-dialog-title">{<p>{tipi[1].name}</p>}</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      Let Google help apps determine location. This means sending anonymous location data to
                      Google, even when no apps are running.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  </DialogActions>
                </Dialog>
                 </div>
                 : null}            
                 
             </div>
      </div>
      
      </>
    
  );
}