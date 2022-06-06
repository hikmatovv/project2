import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import part1 from "../../../assets/part1.png";
import part2 from "../../../assets/part2.png";
import part3 from "../../../assets/part3.png";
import part4 from "../../../assets/part4.png";
import part5 from "../../../assets/part5.png";
import part6 from "../../../assets/part6.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  background: "none",
}));

export default function AutoGrid() {
  return (
    <Box
      id="partners"
      sx={{
        flexGrow: 1,
        marginBottom: "130px",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Grid container spacing={0} sx={{ justifyContent: "center" }}>
        <Grid item md={1.8} sm={4} xs={12}>
          <Item>
            <img src={part1} alt="" />
          </Item>
        </Grid>
        <Grid item md={1.8} sm={4} xs={12}>
          <Item>
            <img src={part2} alt="" />
          </Item>
        </Grid>
        <Grid item md={1.8} sm={4} xs={12}>
          <Item>
            <img src={part3} alt="" />
          </Item>
        </Grid>
        <Grid item md={1.8} sm={4} xs={12}>
          <Item>
            <img src={part4} alt="" />
          </Item>
        </Grid>
        <Grid item md={1.8} sm={4} xs={12}>
          <Item>
            <img src={part5} alt="" />
          </Item>
        </Grid>
        <Grid item md={1.8} sm={4} xs={12}>
          <Item>
            <img src={part6} alt="" />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
