import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MMenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: "sticky",
    top: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    fontFamily: "Syncopate-Bold",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  subtitle: {
    fontFamily: "Syncopate-Bold",
  },
  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const MenuItem = ({ ariaLabel, classes, children }) => (
  <MMenuItem>
    <IconButton aria-label={ariaLabel} color="inherit">
      <Typography className={classes}>{children}</Typography>
    </IconButton>
  </MMenuItem>
);

const NavBar = (props) => {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          minWidth: "80vw",
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            PABRCN
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem aria-label="aboutButton" classes={classes.subtitle}>
              ABOUT
            </MenuItem>
            <MenuItem aria-label="contactButton" classes={classes.subtitle}>
              CONTACT
            </MenuItem>
            <MenuItem aria-label="workButton" classes={classes.subtitle}>
              WORKS
            </MenuItem>
          </div>
          <div className={classes.sectionMobile}>
            <MenuItem aria-label="aboutButton" classes={classes.subtitle}>
              ABOUT
            </MenuItem>
            <MenuItem aria-label="contactButton" classes={classes.subtitle}>
              CONTACT
            </MenuItem>
            <MenuItem aria-label="workButton" classes={classes.subtitle}>
              WORKS
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
