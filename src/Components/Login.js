import React, { Component } from "react";
import { Redirect } from "react-router-dom";
let baseUrl = window.location.pathname.substr(
  0,
  window.location.pathname.lastIndexOf("/")
);
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      usernameInvalid: false,
      pswInvalid: false
    };
  }

  componentDidMount() {
    localStorage.removeItem("user");
  }
  render() {
    return (
      <React.Fragment>
        {/* {localStorage.removeItem('user')} */}
        <div className="container" style={{ position: "relative" }}>
          <div className="row">
            <div className="col-lg-4"></div>
            <div
              className="col-lg-4 "
              style={{ position: "relative", top: 200 + "px" }}
            >
              <div className="panel panel-primary">
                <div className="panel-heading">Login</div>
                <div className="panel-body">
                  <br />
                  <form className="form-horizontal">
                    <div className="form-group">
                      <label
                        className="col-xs-4 control-label"
                        htmlFor="userName"
                        style={{ textAlign: "left" }}
                      >
                        User Name{" "}
                      </label>
                      <div className="col-xs-8">
                        <input
                          type="text"
                          className="form-control"
                          name="user"
                          required
                          value={this.state.username}
                          onChange={e => {
                            this.setState({
                              username: e.target.value
                            });
                            if (this.state.usernameInvalid) {
                              this.setState({
                                usernameInvalid: false
                              });
                            } else {
                              return null;
                            }
                          }}
                          onBlur={() => {
                            if (this.state.username === "") {
                              this.setState({
                                usernameInvalid: !this.state.usernameInvalid
                              });
                            } else {
                              return null;
                            }
                          }}
                        />
                        {this.state.usernameInvalid ? (
                          <div style={{ color: "red" }}>
                            User Name is required
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        className="col-xs-4 control-label"
                        htmlFor="pass"
                        style={{ textAlign: "left" }}
                      >
                        Password{" "}
                      </label>
                      <div className="col-xs-8">
                        <input
                          type="password"
                          className="form-control"
                          name="pass"
                          required
                          ref="password"
                          onChange={e => {
                            this.setState({
                              password: e.target.value
                            });
                            if (this.state.pswInvalid) {
                              this.setState({
                                pswInvalid: false
                              });
                            } else {
                              return null;
                            }
                          }}
                          onBlur={() => {
                            if (this.state.password === "") {
                              this.setState({
                                pswInvalid: !this.state.pswInvalid
                              });
                            } else {
                              return null;
                            }
                          }}
                        />
                        {this.state.pswInvalid ? (
                          <div style={{ color: "red" }}>
                            Password is required
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div
                      className="form-group"
                      id="error"
                      style={{
                        color: "red",
                        position: "relative",
                        left: 15 + "px"
                      }}
                    ></div>
                    <div className="form-group">
                      <span className="col-xs-4"></span>
                      <div className="col-xs-7">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            if (
                              !this.state.usernameInvalid &&
                              !this.state.pswInvalid
                            ) {
                              this.props.onLogin({
                                userName: this.state.username,
                                password: this.state.password
                              });
                              localStorage.setItem("user", this.state.username);
                            }
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.props.status === 200 ? (
          <Redirect to={baseUrl + "/show_rides"} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Login;
