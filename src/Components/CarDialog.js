// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { useTheme } from '@material-ui/core/styles';

// export default function CardDialog({ tipi }) {
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
//       <div role="button" onClick={handleClickOpen} >
//       <div>{tipi[0].name}</div>
//         <div> LUOGO DI RITIRO {tipi[0].pickup.name}</div>
//         <div>LUOGO DI RILASCIO {tipi[0].return.name}</div>
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
                
//                 <hr /> <br />
//                 <i style={{fontSize:100}} className="fas fa-car-alt"></i> <br /> <br />
//                 <h3>Tipologia Auto:</h3> <br /> <br />
//                 <div> <strong> Luogo di ritiro:</strong> &nbsp; &nbsp; <a href="#">{tipi[0].pickup.name}</a></div><br />
//                 <div><strong>Data di ritiro:</strong> &nbsp; &nbsp; <a href="#">{tipi[0].withdrawalDate}</a></div><br />
//                 <div> <strong> Luogo di rilascio: </strong> &nbsp; &nbsp; <a href="#">{tipi[0].return.name}</a></div><br />
//                 <div><strong>Data di rilascio:</strong> &nbsp; &nbsp; <a href="#">{tipi[0].releaseDate}</a></div><br />
//                 <strong>Il Noleggio Auto Comprende:</strong><br />
//                 <p>{tipi[0].rentIncluded}</p><br />
//                 <div><strong>Sito Web:</strong> &nbsp; &nbsp; <a href={tipi[0].contact.website}>{tipi[0].contact.website}</a></div>

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
