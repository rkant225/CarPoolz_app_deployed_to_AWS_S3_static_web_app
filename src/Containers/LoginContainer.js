import Login from "./../Components/Login";
import { connect } from "react-redux";
import { ValidateCreds } from "../Action/action";

var mapStateToProps = state => {
  return {
    status: state.loginStatus
  };
};

var mapDispatchToProps = dispatch => {
  return {
    onLogin: credentials => {
      dispatch(ValidateCreds(credentials));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
