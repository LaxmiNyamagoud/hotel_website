import React from "react";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const buttons = ["AboutUs", "Contact", "Terms & conditions"];

const useStyles = makeStyles({
  footerContent: {
    width: "210px",
    display: "flex",
    flexDirection: "column",
    height: "150px",
    justifyContent: "center",
    alignItems: "center",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <AppBar elevation={0} position="static" style={{ background: "#fff" }}>
        <Toolbar
          style={{ height: "200px", marginTop: "50px", background: "#14274A" }}
        >
          <Grid
            container
            justifyContent="space-around"
            direction="row"
            alignItems="center"
          >
            <Grid item>
              <Typography>Welcome To </Typography>
              <Typography>LUXURY </Typography>
              <Typography>Hotels</Typography>
              <Typography>Book your stay and enjoy your luxury</Typography>
            </Grid>
            <Grid item className={classes.footerContent}>
              {buttons.map((button) => (
                <Button
                  variant="text"
                  style={{
                    width: "50%",
                    alignItems: "center",
                    textTransform: "capitalize",
                    color: "#fff",
                  }}
                >
                  {button}
                </Button>
              ))}
            </Grid>
            <Grid
              item
              container
              direction="column"
              justifyContent="space-between"
              alignItems="center"
              className={classes.footerContent}
            >
              <FacebookIcon style={{ width: "90px", height: "30px" }} />
              <br />
              <TwitterIcon style={{ width: "90px", height: "30px" }} />
              <br />
              <InstagramIcon style={{ width: "90px", height: "30px" }} />
            </Grid>
            <Grid item className={classes.footerContent}>
              <Typography>Subscribe to our newsLetter</Typography>
              <Grid item container direction="row">
                <Grid item md={10}>
                  <input
                    type="text"
                    placeholder="Email Address"
                    style={{
                      height: "35px",
                      border: "3px solid #E0B973",
                      background: "transparent",
                    }}
                  />
                </Grid>
                <Grid item md={2}>
                  <Button
                    variant="contained"
                    style={{
                      height: "43px",
                      background: "#E0B973",
                      border: "3px solid #E0B973",
                    }}
                  >
                    OK
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
