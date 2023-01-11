import {
  Dialog,
  DialogActions,
} from "@mui/material";
import Button from "@mui/material/Button";

const Modal = ({ content, action, actionText, onClose, open }) => {

  return (
      <Dialog onClose={onClose} open={open} maxWidth="sm" fullWidth sx={{ zIndex: 12000 }}>
        {content}
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={() => {action(); onClose()}}>{actionText}</Button>
        </DialogActions>
      </Dialog>
  );
}

export default Modal
