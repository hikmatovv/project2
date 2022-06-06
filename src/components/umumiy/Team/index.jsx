import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import OurTeam from "./OurTeam/index";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'theme.palette.mode === "dark" ? "#1A2027" : "#fff"',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box
      id="team"
      sx={{
        flexGrow: 1,
        backgroundColor: "#202020",
        paddingTop: "12px",
        paddingBottom: "40px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item md={8.1} sm={12} xs={12}>
          <Item sx={{ background: "none", color: "white", boxShadow: "none" }}>
            <p
              style={{
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "39.57px",
              }}
            >
              The Executive Team
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "18.75px",
              }}
            >
              There’s nothing I really wanted to do in life that I wasn’t able
              to get good at. That’s my skill.
            </p>
          </Item>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <OurTeam />
        </Grid>
      </Grid>
    </Box>
  );
}
