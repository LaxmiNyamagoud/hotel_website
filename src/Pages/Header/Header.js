import React from "react";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  Tab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import building from "../../Images/building.jpg";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    color: "#fff",
    padding: 7,

    font: "Montserrat",
    fontWeight: 700,
  },
  img: {
    height: "100vh",
    backgroundImage: `url(${building})`,
  },
  logo: {
    maxWidth: 200,
  },
  toolBarStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <>
      <AppBar elevation={0} style={{ backgroundColor: "transparent" }}>
        <Toolbar className={classes.toolBarStyle}>
          <img src={logo} alt="logo" className={classes.logo} />
          <div
            style={{
              width: "600px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="text"
              className={classes.button}
              component={Link}
              to="/Home"
            >
              Home
            </Button>
            <Button
              variant="text"
              className={classes.button}
              component={Link}
              to="/Facilities"
            >
              Facilities
            </Button>
            <Button
              variant="text"
              className={classes.button}
              component={Link}
              to="/Rooms"
            >
              Rooms
            </Button>
            <Button
              variant="text"
              className={classes.button}
              component={Link}
              to="/Contact"
            >
              Contact-us
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
