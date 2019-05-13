import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import places from "../../resources/places";
import "./list.css";

function AlignItemsList(props) {
  const ListX = places.map(place => (
    <ListItem key={place.key} className="listXX">
      <ListItemAvatar>
        <Avatar alt={place.name} src={place.icon} />
      </ListItemAvatar>
      <ListItemText secondary={place.name} />
    </ListItem>
  ));
  return <List className="listContainer">{ListX}</List>;
}

export default AlignItemsList;
