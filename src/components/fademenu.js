import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"


function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const element = <FontAwesomeIcon icon={faEllipsisV} />
  
    return (
      <div 
        style={{
          position: "absolute",
          textAlign: "right",
          paddingTop: "1%",
          right: "7%",
        }}>
        <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} style={{color:"#e7b2a5"}}>
          { element }
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}><Link to="/profile"> Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>Projects</MenuItem>
          <MenuItem onClick={handleClose}>Contact info</MenuItem>
        </Menu>
      </div>
    );
  }

  export default FadeMenu
