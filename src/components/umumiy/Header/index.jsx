import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

import Navbar from "../../../components/umumiy/Navbar/index";

import rasm from "../../../assets/header.jpg";

const Item = styled(Paper)(({ theme }) => ({
  //   padding: theme.spacing(1),
  textAlign: "center",
  background: "none",
  color: "white",
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ backgroundImage: `url(${rasm})` }}>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ flexGrow: 1, padding: "250px 0px 280px 0px" }}>
        <Grid container spacing={3}>
          <Grid item md={12} sm={12} xs={12}>
            <Item
              sx={{
                fontFamily: "Roboto Slab",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "48px",
                lineHeight: "63px",
                textAlign: "center",
              }}
            >
              Work with an amazing tool
            </Item>
            <Item
              sx={{
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "20px",
                lineHeight: "23px",
                textAlign: "center",
              }}
            >
              We`re constantly trying to express ourselves and actualize our
              dreams. If you have the <br /> opportunity to play this game
            </Item>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Item>
              <Button
                sx={{
                  width: "150px",
                  height: "40px",
                  borderRadius: "8px",
                  padding: "0px 0px",
                  color: "black",
                  backgroundColor: "white",
                  boxShadow: "none",
                  ":hover": { backgroundColor: "#b2b2b2" },
                }}
                variant="contained"
              >
                <p
                  style={{
                    fontSize: "12px",
                    color: "#344767",
                    //   width: "103px",
                  }}
                >
                  Create Account
                </p>
              </Button>
            </Item>
          </Grid>
          <Grid item xs>
            <Item sx={{ fontFamily: "monospace" }}>Find us on</Item>
            <Item>
              <FacebookIcon
                sx={{
                  borderRadius: "20px",
                  width: "15px",
                  padding: "0px 14px 0px 14px",
                }}
              />
              <InstagramIcon
                sx={{
                  borderRadius: "20px",
                  width: "15px",
                  padding: "0px 14px 0px 14px",
                }}
              />
              <TwitterIcon
                sx={{
                  borderRadius: "20px",
                  width: "15px",
                  padding: "0px 14px 0px 14px",
                }}
              />
              <GoogleIcon
                sx={{
                  borderRadius: "20px",
                  width: "15px",
                  padding: "0px 14px 0px 14px",
                }}
              />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
