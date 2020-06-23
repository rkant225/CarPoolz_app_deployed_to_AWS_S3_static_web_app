export default (
  state = {
    loginStatus: "",
    rides: [],
    ridesFetched: false,
    submitRideStatus: "",
    isBooked: false,
    bookedId: undefined
  },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return Object.assign({}, state, { loginStatus: action.response.status });

    case "SHOW_RIDES":
      return Object.assign({}, state, {
        rides: action.response,
        ridesFetched: true,
        allRides: action.response
      });

    case "OFFER_RIDE":
      return Object.assign({}, state, {
        submitRideStatus: action.response.status,
        ridesFetched: false
      });

    case "BOOK_RIDE":
      let currentRides = state.rides;
      return Object.assign({}, state, {
        isBooked: true,
        bookedId: action.response.id,
        rides: currentRides.filter(item => {
          if (item.name === action.data.rider.name) item.seatsLeft -= 1;
          return item;
        })
      });

    case "CANCEL_RIDE":
      let presentRides = state.rides;
      return Object.assign({}, state, {
        isBooked: false,
        bookedId: undefined,
        rides: presentRides.filter(item => {
          if (item.name === action.data.rider.name) item.seatsLeft += 1;
          return item;
        })
      });

    case "FILTER_RIDES":
      let existRides = state.allRides;
      return Object.assign({}, state, {
        rides: existRides.filter(item => {
          if (action.criteria === "to") return item.destination === "Infosys";
          else if (action.criteria === "from") return item.pickUp === "Infosys";
          else if (action.criteria === "others")
            return item.pickUp !== "Infosys" && item.destination !== "Infosys";
          return item;
        })
      });
    default:
      return state;
  }
};
