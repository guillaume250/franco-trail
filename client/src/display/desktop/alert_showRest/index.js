import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import myLoc from "../../capture.PNG";
class Popup extends React.Component {
  render() {
    const { CloseIt } = this.props;

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={CloseIt}
          aria-labelledby="draggable-dialog-title"
          style={{ width: "90vw", height: "90vh" }}
        >
          <DialogContent>
            <img
              src={myLoc}
              style={{ width: "50vw", height: "auto" }}
              alt={"alert"}
            />
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Popup;
