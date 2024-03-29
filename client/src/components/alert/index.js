import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class Popup extends React.Component {
  render() {
    const { CloseIt } = this.props;

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={CloseIt}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle id="draggable-dialog-title">
            {this.props.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.props.message}
              {/*this.props.explanations*/}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={CloseIt} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Popup;
