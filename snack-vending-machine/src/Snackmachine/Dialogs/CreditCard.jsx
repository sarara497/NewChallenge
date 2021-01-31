import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

var pasww = "";
export default function Coins() {
  const [open, setOpen] = React.useState(false);
  const [pass, setPass] = React.useState(0);

  const theme = useTheme();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    alert("Take Your Snack please , Welecom");
    window.location.reload();
  };

  const handleInsert = async (e) => {
    console.log("here", e.target.value);
    var res1 = e.target.value.toString();
    setPass(res1);
    pasww = pasww + pass;
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Card
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Password"}</DialogTitle>
        <DialogContent>
          <span
            style={{
              position: "absolute",
              top: "32%",
              left: "11%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            1
          </span>
          <Button onClick={handleInsert} value="1" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "32%",
              left: "26%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            2
          </span>
          <Button onClick={handleInsert} value="2" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "32%",
              left: "39%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            3
          </span>
          <Button onClick={handleInsert} value="3" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "32%",
              left: "53%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            4
          </span>
          <Button onClick={handleInsert} value="4" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "32%",
              left: "67.5%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            5
          </span>
          <Button onClick={handleInsert} value="5" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "32%",
              left: "81.5%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            6
          </span>
          <Button onClick={handleInsert} value="6" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "48%",
              left: "11%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            7
          </span>
          <Button onClick={handleInsert} value="7" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "48%",
              left: "25.5%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            8
          </span>
          <Button onClick={handleInsert} value="8" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "48%",
              left: "39.5%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            9
          </span>
          <Button onClick={handleInsert} value="9" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "48%",
              left: "53.5%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            0
          </span>
          <Button onClick={handleInsert} value="0" variant="contained"></Button>
          <span
            style={{
              position: "absolute",
              top: "78%",
              left: "7.5%",
              fontSize: "1.25rem",
              fontWeight: "800",
              color: "#0c424a",
            }}
          >
            Password ={pasww}
          </span>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
