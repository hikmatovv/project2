import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import InputBase from "@mui/material/InputBase";
import Switch from "@mui/material/Switch";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom"; 
import image from './img/Background.jpg'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  background: " none",
  boxShadow: "none",
}));
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: "none",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
//   background:"none"
  //   boxShadow:"none"
}));
const GreenSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { "aria-label": "Switch demo" } };



export default function SignIn() {
    const navigate = useNavigate("")
    const handle = ()=>{
      navigate("/contactus")
    }
    const [state, setState] = React.useState({
        jason: false,
      });
      const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };

  return (
    <Box sx={{ flexGrow: 1}} style={{backgroundImage:`url(${image})`,height:"100vh",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <Grid
        container
        spacing={3}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} sm={7} md={5} sx={{ marginTop: "5%" }}>
          <Item2 sx={{ boxShadow: "none", marginTop: "20px",background:"none" }}>
            <Item2 sx={{ width: "80%", marginLeft: "10%" }}>
              <div className="textsa">
                Sign In
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Item>
                      <FacebookOutlinedIcon sx={{ color: "white" }} />
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <GitHubIcon sx={{ color: "white" }} />
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <GoogleIcon sx={{ color: "white" }} />
                    </Item>
                  </Grid>
                </Grid>
              </div>
              <Item2 sx={{ boxShadow: "none", marginTop: "20px" }}>
                <InputBase
                  placeholder="Email"
                  sx={{
                    border: "2px solid gray",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    width: "90%",
                  }}
                />
              </Item2>
              <Item2 sx={{ boxShadow: "none" }}>
                <InputBase
                  placeholder="Current password"
                  sx={{
                    border: "2px solid gray",
                    borderRadius: "8px",
                    paddingLeft: "10px",
                    width: "90%",
                  }}
                />
              </Item2>
              <Item sx={{ textAlign: "left" }}>
                <GreenSwitch {...label}  name="jason" onChange={handleChange} checked={state.jason} defaultChecked />{" "}
                <span>Remember me</span>{" "}
              </Item>
              <Item>
                {" "}
                <Button
                  variant="contained"
                  onClick={handle}
                  sx={{ backgroundColor: "#E02A6B",width:"90%",borderRadius:"8px" }}
                >
                  SIGN IN
                </Button>
              </Item>
              <Item> Don't have an account?<b style={{color:"#E02A6B"}}> Sign Up</b> </Item>
            </Item2>
          </Item2>
        </Grid>
      </Grid>
    </Box>
  );
}
