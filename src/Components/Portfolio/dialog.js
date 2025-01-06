import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Detail from "./detail";
import CloseRoundedIcon from "@mui/icons-material/Cancel";

export default function ReadDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "1000px",
            maxWidth: "100%",
          },
        }}
      >
        <DialogTitle>
          <div
            style={{ float: "right", cursor: "pointer" }}
            onClick={handleClose}
          >
            <CloseRoundedIcon />
          </div>
        </DialogTitle>
        <DialogContent>
          <Detail />
        </DialogContent>
      </Dialog>
    </>
  );
}
