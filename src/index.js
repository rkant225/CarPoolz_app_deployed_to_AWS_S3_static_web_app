import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Store/store";
import Layout from "./Components/Layout";
import LoginContainer from "./Containers/LoginContainer";
import ShowRidesContainer from "./Containers/ShowRidesContainer";
import OfferRideContainer from "./Containers/OfferRideContainer";

let baseUrl = window.location.pathname.substr(
  0,
  window.location.pathname.lastIndexOf("/")
);

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <React.Fragment>
        <Layout component={LoginContainer} path={baseUrl + "/"} exact />
        <Layout component={ShowRidesContainer} path={baseUrl + "/show_rides"} />
        <Layout component={OfferRideContainer} path={baseUrl + "/offer_ride"} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
