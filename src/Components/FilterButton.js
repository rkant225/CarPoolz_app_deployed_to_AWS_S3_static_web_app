import React, { Component } from 'react';

class FilterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnClicked: false
        }
    }
    render() {
        return (
            <input type="button" className={this.state.btnClicked ? "btn btn-success" : "btn btn-primary"} value={this.props.text} onClick={(e) => {
                this.setState({
                    btnClicked: !this.state.btnClicked
                });
                this.props.FilterRides(this.props.direction);
            }} />
        );
    }
}

export default FilterButton;