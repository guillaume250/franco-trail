import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import Popup from "../../components/popup";

import places from "../../resources/places";
import "./list.css";
let countedID = 0;

class AlignItemsList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = { open: false, selectedPlace: {} };
  }
  handleClick = (e, data) => {
    if (countedID === data.key) {
      countedID = 0;
      this.setState({ selectedPlace: data });
      this.setState({ open: true });
    } else {
      countedID = data.key;
      this.props.clickOnMarker(null, null, data.key);
      console.log(data);
    }
  };

  handleClose = () => {
    this.props.zoomOut();
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <List className="listContainer" style={{ color: "black" }}>
          {places.map(place => (
            <ListItem
              key={place.key}
              className="listX"
              onClick={e => this.handleClick(e, place)}
            >
              <ListItemAvatar>
                <Avatar alt={place.name} src={place.icon} />
              </ListItemAvatar>
              <ListItemText secondary={place.name} />
            </ListItem>
          ))}
        </List>
        <Popup
          open={this.state.open}
          CloseIt={this.handleClose}
          data={this.state.selectedPlace}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { mapConfig } = state; // the state object comes from Redux store
  return {
    clickOnMarker: mapConfig.clickOnMarker,
    zoomOut: mapConfig.zoomOut
  };
};
export default connect(mapStateToProps)(AlignItemsList);
