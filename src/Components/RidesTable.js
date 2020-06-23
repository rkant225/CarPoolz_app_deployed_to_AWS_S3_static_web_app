import React, { Component } from "react";

class RidesTable extends Component {
  render() {
    var rows = [];
    this.props.availableRides.forEach((ride, index) => {
      if (ride && ride.seatsLeft > 0) {
        rows.push(
          <tr
            key={index}
            onClick={() => {
              this.props.viewDetails(ride);
            }}
          >
            <td className="text-center">{ride.pickUp}</td>
            <td className="text-center">{ride.destination}</td>
            <td className="text-center">{ride.seatsLeft}</td>
          </tr>
        );
      }
    });
    return (
      <React.Fragment>
        <table className="table table-responsive table-bordered table-hover">
          <thead>
            <tr className="btn-primary">
              <th className="text-center">Start Point</th>
              <th className="text-center">End Point</th>
              <th className="text-center">Seats Available</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default RidesTable;
