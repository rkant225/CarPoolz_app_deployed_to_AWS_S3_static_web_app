import React, { Component } from 'react';
import RidesTable from './RidesTable';
import RideRow from './RideRow';
let baseUrl = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/'));

class ShowRides extends Component {
    constructor(props) {
        
        super(props);
        this.state = {
            btnTo: false,
            btnFrom: false,
            btnOthers: false,
            viewRideDetails: false,
            rideRow: {}
        };
        this.ViewDetails = this.ViewDetails.bind(this);
        
    }

    // componentDidMount(){
    //     alert(this.state.viewRideDetails)
    //    this.setState({
    //         viewRideDetails: false
    //    })
    //    alert(this.state.viewRideDetails)
    // }
    
    ViewDetails(rideDetail) {
        this.setState({
            viewRideDetails: true,
            rideRow: rideDetail
        });
    }
    render() {
        return (
            <div style={{ "marginBottom": 140 + "px" }}>
                {/* {alert(sessionStorage.getItem('user'))} */}
                {
                        localStorage.getItem('user') ? <ul className="nav navbar-nav navbar-right" style={{"position":"fixed","top":"0em","right":"2em","zIndex":"9999"}}> 
                         <li>
                            <div className="btn-nav">
                            <button type="button" className="btn btn-lg" style={{"backgroundColor":"transparent","color":"white","border":"none","outline":"none"}} onClick={() => {
                                        this.props.history.push(baseUrl+'/show_rides');
                                    }}>Home</button>
                            </div>
                        </li>
                        <li>
                            <div className="btn-nav">
                                <a id="login" className="btn btn-lg" style={{ "color": "white" }} href={baseUrl + "/"}>Logout</a>
                            </div>
                        </li>
                    </ul> : this.props.history.push(baseUrl+'/')}
                <div className="container" style={{ "position": "relative", "top": 20 + "vh" }}>
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8">
                            <div className="panel panel-primary">
                                <div className="panel-heading">Book a Ride</div>
                                <div className="panel-body">
                                    <div>
                                        <div className="text-justify">
                                            Pool Carz is an online application which enable users to share rides with others.
                                            You can either book a ride or offer a ride. Did we mention that this app is advertisement free ? To add on
                                            top of that its free of cost ! So what are you waiting for ? Check out the rides available and start PCing!!
                                        </div>
                                        <br />
                                        <br />
                                        <div className="text-center">
                                            <input id="all" type="button" disabled={this.props.status} className="btn btn-primary" value="Show All Rides" onClick={() => {
                                                this.props.ShowRides();
                                            }
                                            } />
                                            {this.props.isFetched && !this.props.status ? <span >
                                                <input type="button" className={this.state.btnTo ? "btn btn-success" : "btn btn-primary"} value="To Infosys" onClick={(e) => {
                                                    this.setState({
                                                        btnTo: true, btnFrom: false, btnOthers: false
                                                    })
                                                    this.props.FilterRides('to');
                                                }} />
                                                <input type="button" className={this.state.btnFrom ? "btn btn-success" : "btn btn-primary"} value="From Infosys" onClick={() => {
                                                    this.setState({
                                                        btnTo: false, btnFrom: true, btnOthers: false
                                                    })
                                                    this.props.FilterRides('from');
                                                }} />
                                                <input type="button" className={this.state.btnOthers ? "btn btn-success" : "btn btn-primary"} value="Others" onClick={() => {
                                                    this.setState({
                                                        btnTo: false, btnFrom: false, btnOthers: true
                                                    })
                                                    this.props.FilterRides('others');
                                                }} />
                                            </span> : null}
                                        </div>
                                        <br />
                                        <br />
                                        <div className="text-center">
                                            {this.props.isFetched && !this.props.bookedId ? <div className="text-center">
                                                <div className="text-info">Please select a ride!</div>
                                                <br />
                                                <RidesTable
                                                    availableRides={this.props.rides}
                                                    viewDetails={this.ViewDetails}
                                                    bookedId={this.props.bookedId} />
                                            </div> : null}
                                            {this.state.viewRideDetails ? <RideRow
                                                bookRide={this.props.BookRide}
                                                cancelRide={this.props.CancelRide}
                                                details={this.state.rideRow}
                                                bookId={this.props.bookedId}
                                            /> : null}
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <input type="button" className="btn btn-primary" value="Offer A Ride!" onClick={() => {
                                            this.props.history.push(baseUrl+'/offer_ride');
                                        }} />
                                    </div>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
            </div>
        );
    }
}

export default ShowRides;