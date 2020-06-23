const offers = [
  {
    offerId: 1000,
    name: "Priya",
    car: "Swift",
    seatsLeft: 2,
    pickUp: "Bhumkar Chowk",
    destination: "Wakad"
  },
  {
    offerId: 1001,
    name: "Shiva",
    car: "Audi",
    seatsLeft: 3,
    pickUp: "Ravet",
    destination: "Nigdi"
  },
  {
    offerId: 1002,
    name: "Preethi",
    car: "Hyundai i10",
    seatsLeft: 2,
    pickUp: "Mukai Chowk",
    destination: "Infosys"
  },
  {
    offerId: 1003,
    name: "Deepak",
    car: "Range Rover",
    seatsLeft: 1,
    pickUp: "Dange Chowk",
    destination: "Ravet"
  }
];
const rides = [];
localStorage.setItem("offers", JSON.stringify(offers));
localStorage.setItem("rides", JSON.stringify(rides));
const users = [
  {
    userName: "user1",
    password: "password123"
  },
  {
    userName: "user2",
    password: "password123"
  },
  {
    userName: "admin",
    password: "admin"
  }
];
localStorage.setItem("users", JSON.stringify(users));

export function FilterRides(criteria) {
  return {
    type: "FILTER_RIDES",
    criteria
  };
}

function onLogin(response) {
  return {
    type: "LOGIN",
    response
  };
}

function UpdateRides(response) {
  return {
    type: "SHOW_RIDES",
    response
  };
}

function UpdateSubmitStatus(response) {
  return {
    type: "OFFER_RIDE",
    response
  };
}

function UpdateBookingStatus(response, data) {
  return {
    type: "BOOK_RIDE",
    response,
    data
  };
}

function UpdateCancelStatus(response, data) {
  return {
    type: "CANCEL_RIDE",
    response,
    data
  };
}

export function ValidateCreds(data) {
  return dispatch => {
    let login_status = false;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].userName === data.userName &&
        users[i].password === data.password
      ) {
        localStorage.setItem("user", users[i].userName);
        login_status = true;
        break;
      }
    }
    if (login_status) {
      dispatch(
        onLogin({
          message: "Login successful",
          status: 200
        })
      );
    } else {
      dispatch(
        onLogin({
          message: "User not found",
          status: 404
        })
      );
    }
  };
}

export function FetchRides() {
  return dispatch => {
    const offers = JSON.parse(localStorage.getItem("offers"));
    dispatch(UpdateRides(offers));
  };
}

export function SubmitRideDetails(data) {
  return dispatch => {
    let existing = localStorage.getItem("offers");
    existing = existing ? JSON.parse(existing.split(",")) : [];

    if (existing.length) {
      data.offerId = 1000 + existing.length;
      existing.push(data);
    } else {
      data.offerId = 1000;
      existing.push(data);
    }

    localStorage.setItem("offers", JSON.stringify(existing));
    dispatch(
      UpdateSubmitStatus({
        message: "Offer added successfully",
        status: 200
      })
    );
  };
}

export function BookRide(data) {
  return dispatch => {
    let existing = localStorage.getItem("rides");
    existing = existing ? JSON.parse(existing.split(",")) : [];

    if (existing.length) {
      data.rideId = 1000 + existing.length;
      existing.push(data);
    } else {
      data.rideId = 1000;
      existing.push(data);
    }
    localStorage.setItem("rides", JSON.stringify(existing));
    let offers = JSON.parse(localStorage.getItem("offers"));
    let newOffers = offers.map(obj => {
      if (obj.offerId === data.rider.offerId) {
        obj.name = data.rider.name;
        obj.seatsLeft -= 1;
        obj.status = "booked";
        return obj;
      } else {
        return obj;
      }
    });
    localStorage.setItem("offers", JSON.stringify(newOffers));
    dispatch(
      UpdateBookingStatus(
        {
          id: data.rideId,
          message: "Ride booked successfully",
          status: 200
        },
        data
      )
    );
  };
}

export function CancelRide(data) {
  return dispatch => {
    const rides = JSON.parse(localStorage.getItem("rides"));
    const newRides = rides.map(obj => {
      if (
        obj.rider.offerId === data.rider.offerId &&
        obj.ridee === data.ridee
      ) {
        obj.status = "cancelled";
        return obj;
      } else {
        return obj;
      }
    });
    localStorage.setItem("rides", JSON.stringify(newRides));
    const offers = JSON.parse(localStorage.getItem("offers"));
    const newOffers = offers.map(obj => {
      if (obj.offerId === data.rider.offerId) {
        obj.seatsLeft += 1;
        return obj;
      } else {
        return obj;
      }
    });
    localStorage.setItem("offers", JSON.stringify(newOffers));
    dispatch(
      UpdateCancelStatus(
        {
          message: "Ride booked cancelled",
          status: 200
        },
        data
      )
    );
  };
}
