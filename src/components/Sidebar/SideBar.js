import React from "react";
import styled from "styled-components";
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
    max-width: 24rem;
    width: 100%;
    padding: 0 2.4rem
`;


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function SideBar() {
  
  return (
    <Wrapper>
      
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="ADMIN" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <NavLink to="/admin/courses">Courses</NavLink>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SupervisedUserCircleIcon />
          </ListItemIcon>
          <NavLink to="/admin/users">Users</NavLink>
        </ListItem>
      </List>
      
    </Wrapper>
  );
}
