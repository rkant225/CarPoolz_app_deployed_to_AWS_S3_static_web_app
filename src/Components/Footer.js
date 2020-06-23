import React, { Component } from "react";
import fb from "../../src/assets/images/facebook.png";
import twr from "../../src/assets/images/twitter.png";
import tele from "../../src/assets/images/telegram.png";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-md-4">
            <div style={{ color: "white" }}>
              <span style={{ position: "relative", top: "15px", left: "20px" }}>
                Terms & Conditions
              </span>
            </div>
          </div>
          <div className="col-md-4">
            <div style={{ color: "white", textAlign: "center" }}>
              <span style={{ position: "relative", top: "15px" }}>
                Copyright &copy; UI & Markup Team, Infosys Limited
              </span>
            </div>
          </div>
          <div
            className="col-md-4"
            style={{ position: "relative", right: "35px" }}
          >
            <div>
              <span
                className="navbar-right"
                style={{ position: "relative", top: "15px" }}
              >
                <img
                  style={{ width: "1.5em", float: "right", marginLeft: "1em" }}
                  src={fb}
                  alt={"FB"}
                />
                <img
                  style={{ width: "1.5em", float: "right", marginLeft: "1em" }}
                  src={twr}
                  alt={"TWR"}
                />
                <img
                  style={{ width: "1.5em", float: "right", marginLeft: "1em" }}
                  src={tele}
                  alt={"TELE"}
                />
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
