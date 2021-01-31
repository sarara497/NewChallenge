import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import axios from "axios";

export default function NotesDialog({ getTotal }) {
  const [open, setOpen] = React.useState(false);
  let number = 0;
  const theme = useTheme();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    getTotal(number / 100);
    setOpen(false);
  };

  const handleInsert = async (e) => {
    // let value = e.target;
    console.log("here", e.target.value);
    await axios
      .post("http://localhost:4000/Items/checkandmonytotal", e.target.value)
      .then((data) => {
        number += data.data;
        console.log("here", data.data);
        console.log("total", number / 100);
      });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Notes
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Notes"}</DialogTitle>
        <DialogContent>
          <span
            style={{
              position: "absolute",
              top: "35%",
              left: "27%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            20$
          </span>
          <Button
            onClick={handleInsert}
            value="20$"
            variant="contained"
          ></Button>
          <span
            style={{
              position: "absolute",
              top: "35%",
              left: "66%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            50$
          </span>
          <Button
            onClick={handleInsert}
            value="50$"
            variant="contained"
          ></Button>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            finished
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
