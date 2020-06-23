import React, { Component } from "react";
class RideRow extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="panel panel-primary" style={{ width: "auto" }}>
          <div className="panel-heading">Ride Details</div>
          <div className="panel-body">
            <table className="table table-responsive table-bordered table-hover">
              <thead>
                <tr>
                  <th className="text-center">Name</th>
                  <th className="text-center">Start Point</th>
                  <th className="text-center">End Point</th>
                  <th className="text-center">Car</th>
                  <th className="text-center">Seats Available</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">{this.props.details.name}</td>
                  <td className="text-center">{this.props.details.pickUp}</td>
                  <td className="text-center">
                    {this.props.details.destination}
                  </td>
                  <td className="text-center">{this.props.details.car}</td>
                  <td className="text-center">
                    {this.props.details.seatsLeft}
                  </td>
                </tr>
              </tbody>
            </table>
            {this.props.bookId ? (
              <p>Ride booked. Id is {this.props.bookId}</p>
            ) : null}
            {!this.props.bookId ? (
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.props.bookRide({
                    rider: this.props.details,
                    ridee: localStorage.user
                  });
                }}
              >
                Book Ride!
              </button>
            ) : (
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.props.cancelRide({
                    rider: this.props.details,
                    ridee: localStorage.user
                  });
                }}
              >
                Cancel Ride
              </button>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RideRow;
