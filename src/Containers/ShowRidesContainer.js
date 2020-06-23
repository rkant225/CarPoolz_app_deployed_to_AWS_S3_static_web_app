import { connect } from 'react-redux';
import ShowRides from './../Components/ShowRides';
import { FetchRides, BookRide, CancelRide, FilterRides } from './../Action/action';

var mapStateToProps = (state) => {
    return {
        rides: state.rides,
        isFetched: state.ridesFetched,
        bookedId: state.bookedId,
        status:state.isBooked
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        ShowRides: () => {
            dispatch(FetchRides());
        },
        BookRide: (data) => {
            dispatch(BookRide(data));
        },
        CancelRide: (data) => {
            dispatch(CancelRide(data))
        },
        FilterRides: (data) => {
            dispatch(FilterRides(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowRides);