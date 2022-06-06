/* eslint-disable react/jsx-pascal-case */
// /* eslint-disable react/jsx-pascal-case */
// /* eslint-disable import/no-anonymous-default-export */
// import React from "react";

// import { useRoutes } from "react-router-dom";
// import { routes } from "../../routes/routes";

import rasm from "../../assets/header.jpg";

import Navbar from "../../components/umumiy/Navbar/index";
import Header from "../../components/umumiy/Header/index";

import About_Us from "../../components/umumiy/About_Us/index";
import Team from "../../components/umumiy/Team/index";
import Partner from "../../components/umumiy/Partner/index";
import Number from "../../components/umumiy/Number/index";
import Twice from "../../components/umumiy/Twice/index";

import Footer from "../../components/umumiy/Footer/index";

// export default () => {
//   const content = useRoutes(routes);
//   return (
//     <>
//       {/* {content} */}
//     </>
//   );
// };

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />

      <div style={{ backgroundColor: "#F0F2F5" }}>
        <Container
          maxWidth="xxl"
          sx={{
            backgroundImage: `url(${rasm})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "0.89",
            width: "100%",
            zIndex: "6",
          }}
        >
          <Navbar />
          <Header />
        </Container>
        <Container maxWidth="90%">
          <Container
            maxWidth="20%"
            sx={{
              position: "relative",
              bottom: "60px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 2px 6px 0px",
              // padding: "none",
            }}
          >
            <About_Us />
            <Team />
            <Partner />
            <Number />
            <Twice />
          </Container>
        </Container>

        <Container maxWidth="20%">
          <Footer />
        </Container>
      </div>
    </React.Fragment>
  );
}
