import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./styles.css";
class Popup extends React.Component {
  scrollHo() {
    ///Carousel Scroll horizontal on mousewheel move
    let carousel = document.getElementById("popupImages");
    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      carousel.scrollLeft -= delta * 40; // Multiplied by 40
      carousel.scrollLeft -= delta * 40; // Multiplied by 40
      e.preventDefault();
    }
    if (carousel.addEventListener) {
      // IE9, Chrome, Safari, Opera
      carousel.addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      carousel.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
      // IE 6/7/8
      carousel.attachEvent("onmousewheel", scrollHorizontally);
    }
  }
  render() {
    const { CloseIt } = this.props;
    if (this.props.open) {
      return (
        <div>
          <Dialog
            open={this.props.open}
            onClose={CloseIt}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle id="draggable-dialog-title">
              {this.props.data.name}
            </DialogTitle>
            <DialogContent className="popContentContainer">
              <div id="popupImages" className="popImagesContainer">
                {this.props.data.photos.map(photo => (
                  <img src={photo} className="popUpImage" alt="Logo" />
                ))}
              </div>

              <div className="popContent">{this.props.data.longDesc}</div>
              <div className="popContactField">
                <a href={this.props.data.contactField.contact} target="_blank">
                  {this.props.data.contactField.type}
                </a>
              </div>
            </DialogContent>
            <DialogActions>
              <Button onClick={CloseIt} color="primary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
      this.scrollHo();
    } else {
      return null;
    }
  }
}

export default Popup;
