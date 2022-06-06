// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import image from "../img/Vector.jpg";
// import FacebookIcon from "../img/Facebook.jpg";
// import TwitterIcon from "../img/Twitter.png";
// import TopIcon from "../img/top.jpg";
// import GitHubIcon from "../img/GitHub.jpg";
// import YouTubeIcon from "../img/YouTube.jpg";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   background:"none",
//   textAlign: "left",
//   color: "#344767",
//   boxShadow:"none"
// }));

// export default function Footer() {
//   return (
//     <Box sx={{ width: "80%", marginLeft: "10%" }}>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={12} sm={2.4}>
//           <Item>
//             <Item>
//               <img src={image} alt="" />
//             </Item>
//             <Item
//               sx={{
//                 color: "#344767",
//                 fontFamily: "Roboto",
//                 fontSize: "16px",
//                 fontWeight: "600",
//               }}
//             >
//               Material Kit 2 PRO
//             </Item>
//             <Item>
//               <span style={{marginLeft:"0px"}}>
//                   <img src={FacebookIcon} alt="" />
//               </span>
//               <span style={{marginLeft:"18px"}}>
//                   <img src={TwitterIcon} alt="" />
//               </span>
//               <span style={{marginLeft:"18px"}}>
//                   <img src={TopIcon} alt="" />
//               </span>
//               <span style={{marginLeft:"18px"}}>
//                   <img src={GitHubIcon} alt="" />
//               </span>
//               <span style={{marginLeft:"18px"}}>
//                   <img src={YouTubeIcon} alt="" />
//               </span>
//             </Item>
//           </Item>
//         </Grid>
//         <Grid item xs={6} sm={2.4}>
//           <Item>
//               <Item> <b>Company</b> </Item>
//               <Item> About Us </Item>
//               <Item> Freebies </Item>
//               <Item> Premium Tools </Item>
//               <Item> Blog </Item>
//           </Item>
//         </Grid>
//         <Grid item xs={6} sm={2.4}>
//         <Item>
//               <Item> <b>Resources</b> </Item>
//               <Item> Illustrations </Item>
//               <Item> Bits & Snippets </Item>
//               <Item> Affiliate Program</Item>
//           </Item>
//         </Grid>
//         <Grid item xs={6} sm={2.4}>
//         <Item>
//               <Item> <b>Help & Support</b> </Item>
//               <Item> Contact Us </Item>
//               <Item> Knowledge Center </Item>
//               <Item> Custom Development </Item>
//               <Item> Sponsorships </Item>
//           </Item>
//         </Grid>
//         <Grid item xs={6} sm={2.4}>
//         <Item>
//               <Item> <b>Legal</b> </Item>
//               <Item>Terms & Conditions </Item>
//               <Item> Privacy Policy </Item>
//               <Item> Licenses (EULA) </Item>
//           </Item>
//         </Grid>
//       </Grid>
//         <Item sx={{textAlign:"center"}}>All rights reserved. Copyright © 2022 Material Kit by Creative Tim. </Item>
//     </Box>
//   );
// }

import React from "react";
import Footer from "../../umumiy/Footer/index";

const index = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};

export default index;
