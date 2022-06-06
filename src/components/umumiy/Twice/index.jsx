import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// import { lineHeight } from "@mui/system";

import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from "@mui/icons-material/Directions";

import Button from "@mui/material/Button";
import { bgcolor } from "@mui/system";

import Comp from "../../../assets/comp.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        sx={{ justifyContent: "center" }}
      >
        <Grid item md={5} sm={12} xs={12}>
          <Item>
            <Item
              sx={{
                textAlign: "left",
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "28.13px",
                color: "#344767",
              }}
            >
              Be the first to see the news
            </Item>
            <Item
              sx={{
                textAlign: "left",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18.75px",
                color: "#7B809A",
              }}
            >
              Your company may not be in the software business, but eventually,
              a software company <br /> will be in your business.
            </Item>
            <Item
              sx={{
                textAlign: { md: "left", sm: "left", xs: "center" },
                display: { md: "flex", sm: "flex", xs: "block" },
              }}
            >
              <Paper
                component="form"
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: { md: "409px", sm: "409px", xs: "100%" },
                  height: "42px",
                  borderRadius: "8px",
                  border: "1px solid #C7CCD0",
                  boxShadow: "none",
                  backgroundColor: "white",
                }}
              >
                {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
                  <MenuIcon />
                </IconButton> */}
                <InputBase
                  sx={{
                    ml: 1,
                    flex: 1,
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "19.6px",
                  }}
                  placeholder="Email Here..."
                  inputProps={{ "aria-label": "search google maps" }}
                />
                {/* <IconButton
                  type="submit"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton> */}
                {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
              </Paper>
              <Button
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: "#1E78E9",
                  width: "112px",
                  height: "40px",
                  borderRadius: "8px",
                  marginLeft: { md: "13px", sm: "0px", xs: "0px" },
                  fontSize: "12px",
                  lineHeight: "16.8px",
                  fontWeight: "800",
                  color: "white",
                  position: "relative",
                  top: "4px",
                }}
              >
                SUBSCRIBE
              </Button>
            </Item>
          </Item>
        </Grid>
        <Grid item md={5} sm={12} xs={12}>
          <Item sx={{ textAlign: { md: "right", sm: "center", xs: "center" } }}>
            <img style={{ width: "80%", height: "100%" }} src={Comp} alt="" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

// <Item
// sx={{
//   backgroundImage: `url(${Comp})`,
//   backgroundSize: "contain",
//   backgroundRepeat: "no-repeat",
//   //   width: { md: "518px", sm: "518px", xs: "100%" },
//   //   height: "283px",
//   padding: "120px 0px 120px 0px",
//   textAlign: "right",

//   //   position: "relative",
//   //   left: "200px",
// }}
// >
// {/* <img
//   style={{ width: { md: "50%", sm: "100%", xs: "100%" } }}
//   src={Comp}
//   alt=""
// /> */}
// </Item>
