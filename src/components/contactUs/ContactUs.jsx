import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Image from "./img/Rectangle 138.jpg";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: "none",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "1px 1px 3px black",
}));

export default function ContactUs() {
  const navigate = useNavigate("");
  const handle = () => {
    navigate("/contactus");
  };

  return (
    <Box sx={{ width: "95%" }}>
      <Grid container spacing={1} sx={{ alignItems: "center" }}>
        <Grid item xs={12} sm={12} md={6}>
          <Item sx={{ marginLeft: "4%" }}>
            <img src={Image} alt="" className="image" />
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Item2 sx={{ boxShadow: "none", marginTop: "20px" }}>
            <Item2 sx={{ marginLeft: { md: "17%", sm: "5%", xs: "5%" } }}>
              <div className="textsa"> Contact us</div>
              <Item sx={{ fontSize: "12px" }}>
                For further questions, including partnership opportunities,
                please
              </Item>
              <Item sx={{ fontSize: "12px" }}>
                email hello@creative-tim.com or contact using our contact form
              </Item>
              <Item sx={{ width: "84%", marginLeft: "6%" }}>
                <Grid container spacing={1}>
                  <Grid xs={6}>
                    <Item>
                      <TextField
                        id="standard-required"
                        label="Full name"
                        defaultValue=""
                        placeholder="Full name"
                        InputProps={{
                          readOnly: false,
                        }}
                        variant="standard"
                      />
                    </Item>
                  </Grid>
                  <Grid xs={6}>
                    <Item>
                      <TextField
                        id="standard-required"
                        label="Email"
                        defaultValue=""
                        placeholder="hello@creative-tim.com"
                        InputProps={{
                          readOnly: false,
                        }}
                        variant="standard"
                      />
                    </Item>
                  </Grid>
                  <Grid xs={12}>
                    <Item sx={{ marginTop: "10px" }}>
                      <TextField
                        id="filled-multiline-static"
                        label="How can we help you?"
                        multiline
                        rows={5}
                        placeholder="Describe your problem in at least 250 characters"
                        variant="standard"
                        sx={{ width: "90%" }}
                      />
                    </Item>
                  </Grid>
                </Grid>
                <Item>
                  <Button
                    variant="contained"
                    onClick={handle}
                    sx={{
                      backgroundColor: "#E02A6B",
                      marginTop: "10px",
                      fontSize: "70%",
                    }}
                  >
                    SEND MESSAGE
                  </Button>
                </Item>
              </Item>
            </Item2>
          </Item2>
        </Grid>
      </Grid>
    </Box>
  );
}
