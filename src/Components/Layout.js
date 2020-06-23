import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import "./../assets/css/bootstrap.css";
import "./../assets/css/layout.css";

import { Route } from "react-router-dom";

const Layout = ({ component: Component, ...rest }) => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Route {...rest} render={props => <Component {...props} />} />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
