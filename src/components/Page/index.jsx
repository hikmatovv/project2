/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Grid from "@mui/material/Grid";
import Upper from "../Page/Upper";
import Card from "../Page/Card";
import Input from "../Page/Input";
import Footer from "../Page/Footer";

import Navbar from "../../components/umumiy/Navbar/index";
import Header from "../../components/umumiy/Header/index";

export default () => {
  return (
    <>
      <Grid>
        <Navbar />
        <Header />
        <Upper />
        <Card />
        <Input />
        <Footer />
      </Grid>
    </>
  );
};
