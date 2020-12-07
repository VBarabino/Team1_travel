// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

// export default function HotelDialog({ tipi }) {
//   const [open, setOpen] = React.useState(false);
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//         {console.log(tipi)}
//       <div role="button" onClick={handleClickOpen} >
//       <div>{tipi.name}</div>
//                 <div>
//                     {tipi.description}
//                 </div>
//                 <div><a href='#'>Clicca qui per maggiori dettagli</a></div>
//                 <button> tipi={tipi.tags}</button>
//       </div>
//       <Dialog
//         fullScreen={fullScreen}
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="responsive-dialog-title"
//       >
//         <DialogTitle id="responsive-dialog-title">{tipi[0].name}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             <div>
                
//               Ciao
//             </div>
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary" autoFocus>
//             Chiudi
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
