import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Logocha from "../../../assets/Vector.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#344767",
  background: "none",
  fontSize: "14px",
  fontWeight: "400",
  lineHeight: "16.41px",
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "60px" }} id="footer">
      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        <Grid item md={1.9} sm={4} xs={12}>
          <Item>
            <img src={Logocha} alt="" />
          </Item>
          <Item sx={{ fontSize: "16px", fontWeight: "600" }}>
            Material Kit 2 PRO
          </Item>
          <Item>
            <FacebookIcon
              sx={{
                bgcolor: "#F0F2F5",
                color: "#344767",
                margin: "10px",
                width: "15px",
                height: "14.94px",
              }}
            />
            <TwitterIcon
              sx={{
                bgcolor: "#F0F2F5",
                color: "#344767",
                margin: "10px",
                width: "15px",
                height: "14.94px",
              }}
            />
            <SportsSoccerIcon
              sx={{
                bgcolor: "#F0F2F5",
                color: "#344767",
                margin: "10px",
                width: "15px",
                height: "14.94px",
              }}
            />
            <GitHubIcon
              sx={{
                bgcolor: "#F0F2F5",
                color: "#344767",
                margin: "10px",
                width: "15px",
                height: "14.94px",
              }}
            />
            <YouTubeIcon
              sx={{
                bgcolor: "#F0F2F5",
                color: "#344767",
                margin: "10px",
                width: "15px",
                height: "14.94px",
              }}
            />
          </Item>
        </Grid>
        <Grid item md={1.9} sm={4} xs={12}>
          <Item
            sx={{ fontSize: "14px", fontWeight: "600", lineHeight: "16.41px" }}
          >
            Company
          </Item>
          <Item>About Us</Item>
          <Item>Freebies</Item>
          <Item>Premium Tools</Item>
          <Item>Blog</Item>
        </Grid>
        <Grid item md={1.9} sm={4} xs={12}>
          <Item
            sx={{ fontSize: "14px", fontWeight: "600", lineHeight: "16.41px" }}
          >
            Resources
          </Item>
          <Item>Illustrations</Item>
          <Item>Bits & Snippets</Item>
          <Item>Affiliate Program</Item>
        </Grid>
        <Grid item md={1.9} sm={6} xs={12}>
          <Item
            sx={{ fontSize: "14px", fontWeight: "600", lineHeight: "16.41px" }}
          >
            Help & Support
          </Item>
          <Item>Contact Us</Item>
          <Item>Knowledge Center</Item>
          <Item>Custom Development</Item>
          <Item>Sponsorships</Item>
        </Grid>
        <Grid item md={1.9} sm={6} xs={12}>
          <Item
            sx={{ fontSize: "14px", fontWeight: "600", lineHeight: "16.41px" }}
          >
            Legal
          </Item>
          <Item>Terms & Conditions</Item>
          <Item>Privacy Policy</Item>
          <Item>Licenses (EULA)</Item>
        </Grid>

        <Grid item md={12} sm={12} xs={12}>
          <Item
            sx={{
              textAlign: "center",
              marginTop: "40px",
              marginBottom: "26px",
            }}
          >
            All rights reserved. Copyright © 2022 Material Kit by Creative Tim.
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
