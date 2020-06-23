import React, { Component } from "react";
let baseUrl = window.location.pathname.substr(
  0,
  window.location.pathname.lastIndexOf("/")
);

class OfferRide extends Component {
  constructor(props) {
    super(props);
    this.ValidateData = this.ValidateData.bind(this);
    this.state = {
      userInvalid: false,
      srcInvalid: false,
      destInvalid: false,
      carInvalid: false,
      seatsInvalid: false,
      formValid: false
    };
  }
  ValidateData(value, field) {
    switch (field) {
      case "Name":
        if (value === "") {
          this.setState({
            userInvalid: true
          });
        } else {
          if (this.state.userInvalid) {
            this.setState({
              userInvalid: false
            });
          } else {
            return null;
          }
        }
        break;

      case "PickUp":
        if (value === "") {
          this.setState({
            srcInvalid: true
          });
        } else {
          if (this.state.srcInvalid) {
            this.setState({
              srcInvalid: false
            });
          } else {
            return null;
          }
        }
        break;

      case "Destination":
        if (value === "") {
          this.setState({
            destInvalid: true
          });
        } else {
          if (this.state.destInvalid) {
            this.setState({
              destInvalid: false
            });
          } else {
            return null;
          }
        }
        break;

      case "Car":
        if (value === "") {
          this.setState({
            carInvalid: true
          });
        } else {
          if (this.state.carInvalid) {
            this.setState({
              carInvalid: false
            });
          } else {
            return null;
          }
        }
        break;

      case "SeatsLeft":
        
        let is = parseInt(value) > 0 && parseInt(value) < 8;
       
        if (is) {
          this.setState({
            seatsInvalid: true
          });
        } else {
          if (this.state.seatsInvalid) {
            this.setState({
              seatsInvalid: false
            });
          } else {
            return null;
          }
        }
        break;

      default:
        break;
    }
    this.setState(
      {
        formValid:
          this.state.userInvalid &&
          this.state.srcInvalid &&
          this.state.destInvalid &&
          this.state.carInvalid &&
          this.state.seatsInvalid
      }
    );
  }
  render() {
    
    return (
      <div style={{ marginBottom: 140 + "px" }}>
        {localStorage.getItem("user") ? (
          <ul
            className="nav navbar-nav navbar-right"
            style={{
              position: "fixed",
              top: "0em",
              right: "2em",
              zIndex: "9999"
            }}
          >
            <li>
              <div className="btn-nav">
                <button
                  type="button"
                  className="btn btn-lg"
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "none",
                    outline: "none"
                  }}
                  onClick={() => {
                    this.props.history.push(baseUrl + "/show_rides");
                  }}
                >
                  Home
                </button>
              </div>
            </li>
            <li>
              <div className="btn-nav">
                <a
                  id="login"
                  className="btn btn-lg"
                  style={{ color: "white" }}
                  href={baseUrl + "/"}
                >
                  Logout
                </a>
              </div>
            </li>
          </ul>
        ) : (
          this.props.history.push(baseUrl + "/offer_ride")
        )}
        <div
          className="container"
          style={{ position: "relative", top: 20 + "vh", width: 50 + "%" }}
        >
          <div className="row">
            <div className="panel panel-primary" style={{ width: "100vh" }}>
              <div className="panel-heading">Car Ride Registration Form</div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control"
                      ref="name"
                      onBlur={e => {
                        this.ValidateData(e.target.value, "Name");
                      }}
                    />
                    {this.state.userInvalid ? (
                      <p style={{ color: "red" }}>This field is required</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Start Location</label>
                    <input
                      type="text"
                      className="form-control"
                      ref="pickUp"
                      onBlur={e => {
                        this.ValidateData(e.target.value, "PickUp");
                      }}
                    />
                    {this.state.srcInvalid ? (
                      <p style={{ color: "red" }}>This field is required</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Destination</label>
                    <input
                      type="text"
                      className="form-control"
                      ref="destination"
                      onBlur={e => {
                        this.ValidateData(e.target.value, "Destination");
                      }}
                    />
                    {this.state.destInvalid ? (
                      <p style={{ color: "red" }}>This field is required</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Car</label>
                    <input
                      type="text"
                      className="form-control"
                      ref="car"
                      onBlur={e => {
                        this.ValidateData(e.target.value, "Car");
                      }}
                    />
                    {this.state.carInvalid ? (
                      <p style={{ color: "red" }}>This field is required</p>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <label>Seats Available</label>
                    <input
                      type="number"
                      className="form-control"
                      step="1"
                      ref="seatsLeft"
                      onBlur={e => {
                        this.ValidateData(e.target.value, "SeatsLeft");
                      }}
                    />
                    {!this.state.seatsInvalid ? (
                      <p style={{ color: "red" }}>
                        {"Number of seats should be > 0 and < 8"}
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      // alert(this.state.seatsInvalid)
                      if (!this.state.formValid) {
                        this.props.SubmitRide({
                          name: this.refs.name.value,
                          pickUp: this.refs.pickUp.value,
                          destination: this.refs.destination.value,
                          car: this.refs.car.value,
                          seatsLeft: this.refs.seatsLeft.value
                        });
                      } else {
                        return null;
                      }
                    }}
                  >
                    Submit
                  </button>
                </form>
                {this.props.submitStatus === 200 ? (
                  <div>
                    <div className="text-center text-success">
                      <h4>Added Successfully!</h4>
                    </div>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
        </div>
        <br></br> <br></br>
      </div>
    );
  }
}

export default OfferRide;
