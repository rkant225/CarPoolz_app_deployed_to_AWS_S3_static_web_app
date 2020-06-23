import { connect } from "react-redux";
import OfferRide from "../Components/OfferRide";
import { SubmitRideDetails } from "./../Action/action";

var mapStateToProps = state => {
  return {
    submitStatus: state.submitRideStatus
  };
};

var mapDispatchToProps = dispath => {
  return {
    SubmitRide: rideDetails => {
      dispath(SubmitRideDetails(rideDetails));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OfferRide);
