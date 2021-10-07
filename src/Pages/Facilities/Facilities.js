import {
  Grid,
  makeStyles,
  Typography,
  ButtonGroup,
  Button,
  Tab,
} from "@material-ui/core";
import React, { forwardRef } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import img3 from "../../Images/img3.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import building from "../../Images/building.jpg";

const useStyles = makeStyles({
  img: {
    height: "100vh",
    backgroundImage: `url(${building})`,
  },
  welcome: {
    color: "#fff",
    height: "80vh",
  },
  bookNow: {
    width: "100%",
    height: "20vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "sticky",
    color: "#fff",
  },
  text2: {
    height: "90vh",
    marginTop: 20,
  },
});

function Facilities() {
  const classes = useStyles();
  const CustomBox = forwardRef(({ imag, name }, ref) => {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        className={classes.text2}
        style={{ backgroundImage: `url(${imag})` }}
      >
        <div
          style={{
            width: "30%",
            height: "6vh",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#14274A",
            fontWeight: "bold",
          }}
        >
          <Typography variant="h5">{name}</Typography>
        </div>
      </Grid>
    );
  });
  return (
    <>
      <div className={classes.img}>
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid
            container
            direction="column"
            justifyContent="center"
            md={10}
            className={classes.welcome}
          >
            <Typography variant="h5">WELCOME TO </Typography>
            <Typography variant="h2">LUXURY </Typography>
            <Typography variant="h4">HOTELS</Typography>
            <Typography variant="h6">
              Book your stay and enjoy your luxury
            </Typography>
          </Grid>
          <div className={classes.bookNow}>
            <Button
              variant="contained"
              startIcon={<DateRangeIcon />}
              style={{ width: "12%", background: "#E0B973" }}
            >
              BOOK NOW
            </Button>
            <Tab
              label="Scroll"
              icon={<ArrowDropDownCircleIcon />}
              style={{ width: "12%" }}
            />
          </div>
        </Grid>
      </div>
      <Header />
      <Grid container direction="row">
        <Grid item md={2}></Grid>
        <Grid
          item
          container
          md={8}
          direction="column"
          style={{ width: "100%" }}
        >
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: "40vh" }}
          >
            <Typography variant="h4">Facilities</Typography>
            <Typography variant="h6">
              Incididunt fugiat duis magna consectetur. Ut sunt nostrud fugiat
              aliqua sit duis ipsum amet nulla. Eu est in Lorem est sunt quis
              fugiat. Nulla occaecat est nostrud consequat. Sit irure ex laborum
              officia do elit fugiat anim incididunt.
            </Typography>
          </Grid>
          <CustomBox imag={img3} name="The Gym" />
          <CustomBox imag={img3} name="The Gym" />
          <CustomBox imag={img3} name="The Gym" />
          <Grid
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            style={{ height: "30vh" }}
          >
            <Typography variant="h6" className={classes.text}>
              Testimonials
            </Typography>
            <Typography style={{ color: "#14274A" }}>
              "Exercitation aliquip pariatur eiusmod nulla ex. Nulla aliquip
              sunt nostrud id."
            </Typography>
            <Typography style={{ color: "#14274A" }}>
              Mr. and Mrs. X,UK
            </Typography>
            <br />
            <ButtonGroup>
              <Button
                style={{
                  background: "#E0B973",
                  color: "#fff",
                  marginRight: "13px",
                }}
              >
                <ArrowBackIosIcon />
              </Button>
              <Button
                style={{
                  background: "#E0B973",
                  color: "#fff",
                }}
              >
                <ArrowForwardIosIcon />
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>

      <Footer />
    </>
  );
}

export default Facilities;
