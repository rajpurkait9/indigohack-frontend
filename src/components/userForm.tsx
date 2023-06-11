import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function UserForm() {
  const [open, setOpen] = React.useState(false);
  const [bookData, setBookData] = React.useState({
    name: "raj purkait",
    email: " raj112@gmail.com",
    phone: "9654674687",
    age: "23",
  });
  const handleClickOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const someData = await axios.post(
        "http://localhost:9000/api/v1/book",
        bookData
      );
      window.alert("successfull");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Button variant="contained" size="small" onClick={handleClickOpen}>
        Book
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill your details for booking
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={bookData.name}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            value={bookData.email}
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Phone number"
            type="text"
            value={bookData.phone}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => handleSubmit()}>Proceed</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
