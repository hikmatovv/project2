/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import bg from "../../../assets/img/bg.png";
import avatar from "../../../assets/img/avatar.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default () => {
  return (
    <>
      {/* <Grid
        sx={{
          backgroundImage: `url(${bg})`,
          width: "100%",
          height: "400px",
        }}
      ></Grid> */}
      <Container maxWidth="xxl" sx={{ position: "relative", top: "90px" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{ marginTop: "-13% ", width: "110px", height: "110px" }}
          />
        </Grid>
        <Grid
          mt="-10%"
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            height: "500px",
            width: "100%",
          }}
        >
          <Grid container sx={{ display: "flex", flexDirection: "row" }}>
            <Grid lg={3.5} md={3}></Grid>
            <Grid mt="6%" lg={5} md={6}>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    weight: 600,
                    fontSize: "30px",
                    fontFamily: "Roboto Slab",
                  }}
                >
                  Michael Rown
                </Typography>
                <Button sx={{ border: "1px solid" }}> Follow</Button>
              </Grid>
              <Grid sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  323
                </Typography>
                <Typography
                  color="#7B809A"
                  ml="1%"
                  sx={{ fontSize: "16px", fontWeight: 400 }}
                >
                  Posts
                </Typography>

                <Typography
                  ml="4%"
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  3.5k
                </Typography>
                <Typography
                  color="#7B809A"
                  ml="1%"
                  sx={{ fontSize: "16px", fontWeight: 400 }}
                >
                  Followers
                </Typography>

                <Typography
                  ml="4%"
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  260
                </Typography>
                <Typography
                  color="#7B809A"
                  ml="1%"
                  sx={{ fontSize: "16px", fontWeight: 400 }}
                >
                  Following
                </Typography>
              </Grid>
              <Grid mt="5%">
                <Typography color="#7B809A">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Animi molestias minima sequi, illum corporis sapiente, beatae
                  porro quaerat, quis rerum voluptatum repellat necessitatibus
                  commodi unde! Fugiat nostrum vitae quas repellendus.
                </Typography>

                <Typography sx={{ display: "flex", flexDirection: "row" }}>
                  <Typography color="#1A73E7"> More about me</Typography>
                  <Typography color="#1A73E7" ml="2%" mt="0.7%">
                    <ArrowForwardIcon sx={{ fontSize: "17px" }} />
                  </Typography>
                </Typography>
              </Grid>
            </Grid>
            <Grid md={3} lg={3.5}></Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
