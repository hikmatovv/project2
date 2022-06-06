import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";

import rasm from "../../../assets/aboutPhoto.png";

import PublicIcon from "@mui/icons-material/Public";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";

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
    <Box
      id="about"
      sx={{ flexGrow: 1, justifyContent: "center", textAlign: "center" }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ justifyContent: "center" }}
          md={6}
          sm={12}
          xs={12}
        >
          <Grid md={4} sm={6} xs={12}>
            <Item sx={{ textAlign: "left", marginBottom: "40px" }}>
              <p>
                <PublicIcon
                  sx={{
                    color: "#439DEE",
                    width: "28.33px",
                    borderRadius: "10px",
                    fontSize: "30px",
                  }}
                />
              </p>{" "}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "23.44px",
                  color: "#344767",
                }}
              >
                Fully integrated
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  color: "#7B809A",
                }}
              >
                {" "}
                We get insulted by others, lose trust for those We get back
                freezes
              </p>
            </Item>
            <Item sx={{ textAlign: "left" }}>
              <p>
                <BlurOnIcon
                  sx={{
                    color: "#439DEE",
                    width: "28.33px",
                    borderRadius: "10px",
                    fontSize: "30px",
                  }}
                />
              </p>{" "}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "23.44px",
                  color: "#344767",
                }}
              >
                Prebuilt components
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  color: "#7B809A",
                }}
              >
                {" "}
                We get insulted by others, lose trust for those We get back
                freezes
              </p>
            </Item>
          </Grid>
          <Grid md={4} sm={6} xs={12}>
            <Item
              sx={{
                textAlign: "left",
                marginLeft: { md: "40px", sm: "40px", xs: "0px" },
                marginBottom: "40px",
              }}
            >
              <p>
                <AttachMoneyIcon
                  sx={{
                    color: "#439DEE",
                    width: "28.33px",
                    borderRadius: "10px",
                    fontSize: "30px",
                  }}
                />
              </p>{" "}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "23.44px",
                  color: "#344767",
                }}
              >
                Payments functionality
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  color: "#7B809A",
                }}
              >
                {" "}
                We get insulted by others, lose trust for those We get back
                freezes
              </p>
            </Item>
            <Item
              sx={{
                textAlign: "left",
                marginLeft: { md: "40px", sm: "40px", xs: "0px" },
              }}
            >
              {" "}
              <p>
                <ViewTimelineIcon
                  sx={{
                    color: "#439DEE",
                    width: "28.33px",
                    borderRadius: "10px",
                    fontSize: "30px",
                  }}
                />
              </p>{" "}
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  lineHeight: "23.44px",
                  color: "#344767",
                }}
              >
                Improved platform
              </p>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "26px",
                  color: "#7B809A",
                }}
              >
                {" "}
                We get insulted by others, lose trust for those We get back
                freezes
              </p>
            </Item>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          md={6}
          sm={12}
          xs={12}
          sx={{
            justifyContent: "center",
            textAlign: "center",
            margin: "100px 0px 100px 0px",
          }}
        >
          <Grid>
            <Item
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 2px 6px 1px ",
              }}
            >
              <Item
                sx={{
                  backgroundImage: `url(${rasm})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  //   width: { md: "383px", sm: "383px", xs: "322px" },
                  height: "255px",

                  position: "relative",
                  top: "-20px",
                }}
              ></Item>
              <Item>
                <p
                  style={{
                    color: "#344767",
                    fontSize: "20px",
                    fontWeight: "500",
                    lineHeight: "23.44px",
                  }}
                >
                  Get insights on Search
                </p>
                <p
                  style={{
                    color: "#7B809A",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "26px",
                  }}
                >
                  Website visitors today demand a frictionless user <br />{" "}
                  experience - especially when using search. <br /> Because of
                  the hight standards.{" "}
                </p>
                <p>
                  <Button
                    sx={{
                      backgroundColor: "#1E78E9",
                      color: "white",
                      width: "120px",
                      height: "32px",
                      borderRadius: "8px",
                      fontSize: "10px",
                      fontFamily: "sans-serif",
                    }}
                    variant="contained"
                    disableElevation
                  >
                    FIND OUT MORE
                  </Button>
                </p>
              </Item>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
