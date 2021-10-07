import React from "react";
import { Grid, Button, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const useStyles = makeStyles({
  appbar: {
    height: "30vh",
    backgroundColor: "#14274A",
  },
});

function Contact() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.appbar}>
        <Header />
        <br />
        <Typography
          align="center"
          style={{
            color: "#fff",
            fontWeight: "bold",
            marginTop: "15vh",
            fontSize: "30px",
          }}
        >
          CONTACT-US
        </Typography>
      </div>
      <Grid container style={{ height: "120vh" }}>
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          <div style={{ marginTop: "15vh" }}>
            <Typography>WE ARE HERE FOR YOU</Typography>
            <Typography>
              Velit est elit quis velit. Veniam sunt cillum aliquip sit sit
              nulla ullamco cillum reprehenderit ex excepteur nulla laboris eu.
              Irure occaecat irure magna aliqua. Aliquip magna laborum voluptate
              nisi deserunt est magna nisi nisi. Ut quis cillum laboris eiusmod
              incididunt exercitation duis cupidatat nulla reprehenderit fugiat
              aliqua exercitation pariatur.Velit est elit quis velit. Veniam
              sunt cillum aliquip sit sit nulla ullamco cillum reprehenderit ex
              excepteur nulla laboris eu. Irure occaecat irure magna aliqua.
              Aliquip magna laborum voluptate nisi deserunt est magna nisi nisi.
            </Typography>
          </div>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            style={{ height: "52vh", marginTop: "15vh" }}
          >
            <div style={{ width: "48%" }}>
              <Typography>497 Evergreen Rd. Roseville</Typography>
              <Typography>CA 962524</Typography>
              <Typography>View map</Typography>
              <br />
              <Typography>Phone:+9292836273674</Typography>
              <Typography>Email:najhdjh@gmail.com</Typography>
            </div>
            <div
              style={{
                width: "48%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <TextField label="Name" variant="outlined" />
              <TextField label="Email Address" variant="outlined" />
              <TextField
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
              <Button
                style={{
                  height: "40px",
                  width: "12%",
                  backgroundColor: "#E0B973",
                  marginLeft: "88%",
                  color: "#fff",
                }}
              >
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default Contact;
