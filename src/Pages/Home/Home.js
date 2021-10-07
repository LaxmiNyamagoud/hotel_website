import React from "react";
import {
  Divider,
  Grid,
  makeStyles,
  Typography,
  Button,
  ButtonGroup,
  Tab,
} from "@material-ui/core";
import Footer from "../Footer/Footer";

import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jfif";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import building from "../../Images/building.jpg";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import Header from "../Header/Header";

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
  bedroom: {
    width: "60%",
  },
  text: {
    fontFamily: "Adobe Garamond Pro",
    fontWeight: "bold",
    color: "#14274A",
  },
});

function Home() {
  const classes = useStyles();
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
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          height: "20vh",
        }}
      >
        <Typography
          style={{
            color: "#14274A",
            font: "Montserrat",
            fontWeight: "400px",
            fontSize: "30px",
          }}
        >
          All our room types are including complementary breakfast
        </Typography>
      </Grid>

      <Grid container style={{ height: "150vh" }}>
        <Grid item md={1}></Grid>
        <Grid
          item
          container
          md={10}
          direction="column"
          justifyContent="space-between"
        >
          <Grid
            item
            container
            direction="row"
            style={{ width: "100%", height: "40vh" }}
          >
            <Grid item container direction="row" style={{ width: "40%" }}>
              <Grid item md={1} style={{ height: "75%" }}>
                <Divider
                  orientation="vertical"
                  style={{
                    width: "2px",
                    background: "#14274A",
                  }}
                />
              </Grid>
              <Grid item md={11}>
                <Typography variant="h4" className={classes.text}>
                  Luxury Redefined
                </Typography>
                <br />
                <Typography
                  variant="h6"
                  style={{
                    font: "Montserrat",
                    fontWeight: "300",
                    color: "#14274A",
                  }}
                >
                  Exercitation dolore velit in labore ad Lorem pariatur magna
                  sit. Est incididunt amet ad Lorem veniam commodo minim. Ipsum
                  veniam culpa elit minim. Laboris dolor qui ex labore cillum
                  veniam anim laborum laborum amet qui ex.
                </Typography>
                <br />
                <Button
                  variant="text"
                  style={{ width: "20%", background: "#E0B973" }}
                >
                  Explore
                </Button>
              </Grid>
            </Grid>
            <img src={img1} alt="logo" className={classes.bedroom} />
          </Grid>
          <Grid
            item
            container
            direction="row"
            style={{ width: "100%", height: "40vh" }}
          >
            <Grid item container direction="row" style={{ width: "40%" }}>
              <Grid item md={1} style={{ height: "75%" }}>
                <Divider
                  orientation="vertical"
                  style={{
                    width: "2px",
                    background: "#14274A",
                  }}
                />
              </Grid>
              <Grid item md={11}>
                <Typography variant="h4" className={classes.text}>
                  Luxury Redefined
                </Typography>
                <br />
                <Typography
                  variant="h6"
                  style={{
                    font: "Montserrat",
                    fontWeight: "300",
                    color: "#14274A",
                  }}
                >
                  Exercitation dolore velit in labore ad Lorem pariatur magna
                  sit. Est incididunt amet ad Lorem veniam commodo minim. Ipsum
                  veniam culpa elit minim. Laboris dolor qui ex labore cillum
                  veniam anim laborum laborum amet qui ex.
                </Typography>
                <br />
                <Button
                  variant="text"
                  style={{ width: "20%", background: "#E0B973" }}
                >
                  Explore
                </Button>
              </Grid>
            </Grid>
            <img src={img2} alt="logo" className={classes.bedroom} />
          </Grid>
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
        <Grid item md={1}></Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Home;
