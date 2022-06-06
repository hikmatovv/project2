import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
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
          md={12}
          sm={12}
          xs={12}
        >
          {/* <Grid md={4} sm={12} xs={12}>
            <Grid container md={12} sm={12} xs={12}>
              <Item sx={{ textAlign: "left" }}>1</Item>
              <Item sx={{ textAlign: "left" }}>1</Item>
            </Grid>
            <Grid container md={12} sm={12} xs={12}>
              <Item sx={{ textAlign: "left" }}>1</Item>
              <Item sx={{ textAlign: "left" }}>1</Item>
            </Grid>
          </Grid>
          <Grid md={4} sm={12} xs={12}>
            <Item
              sx={{
                textAlign: "left",
                marginLeft: { md: "40px", sm: "0px", xs: "0px" },
                marginBottom: "40px",
              }}
            >
              2
            </Item>
            <Item
              sx={{
                textAlign: "left",
                marginLeft: { md: "40px", sm: "0px", xs: "0px" },
              }}
            >
              4
            </Item>
          </Grid> */}
        </Grid>
      </Grid>
    </Box>
  );
}
