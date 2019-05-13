import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";

import places from "../../resources/places";
import "./list.css";

class AlignItemsList extends React.Component {
  handleClick = (e, data) => {
    this.props.clickOnMarker(null, null, data.key);
    console.log(data);
    // this.setState({ selectedPlace: data });
    // this.setState({ open: true });
  };
  render() {
    return (
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
    );
  }
}
const mapStateToProps = state => {
  const { mapConfig } = state; // the state object comes from Redux store
  return {
    clickOnMarker: mapConfig.clickOnMarker
  };
};
export default connect(mapStateToProps)(AlignItemsList);
