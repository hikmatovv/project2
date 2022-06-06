import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { lineHeight } from "@mui/system";

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
        spacing={3}
        sx={{ justifyContent: "center", marginBottom: "180px" }}
      >
        <Grid item md={3} sm={4} xs={12}>
          <Item
            sx={{
              fontSize: "48px",
              color: "#1A73E7",
              fontWeight: "600",
              lineHeight: "56.25px",
            }}
          >
            3,726
          </Item>
          <Item
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "23.44px",
              color: "#344767",
            }}
          >
            Projects
          </Item>
          <Item
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "18.75px",
              color: "#7B809A",
            }}
          >
            Of “high-performing” level are led by a <br /> certified project
            manager
          </Item>
        </Grid>
        <Grid item md={3} sm={4} xs={12}>
          <Item
            sx={{
              fontSize: "48px",
              color: "#1A73E7",
              fontWeight: "600",
              lineHeight: "56.25px",
            }}
          >
            2,332+
          </Item>
          <Item
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "23.44px",
              color: "#344767",
            }}
          >
            Hours
          </Item>
          <Item
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "18.75px",
              color: "#7B809A",
            }}
          >
            That meets quality standards required by <br /> our users
          </Item>
        </Grid>
        <Grid item md={3} sm={12} xs={12}>
          <Item
            sx={{
              fontSize: "48px",
              color: "#1A73E7",
              fontWeight: "600",
              lineHeight: "56.25px",
            }}
          >
            22/7
          </Item>
          <Item
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              lineHeight: "23.44px",
              color: "#344767",
            }}
          >
            Support
          </Item>
          <Item
            sx={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "18.75px",
              color: "#7B809A",
            }}
          >
            Actively engage team members that <br /> finishes on time
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
