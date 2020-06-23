import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-default navbar-fixed-top' style={{"backgroundColor":"black"}}>
                <div className='navbar-brand' style={{ "color": "white" }}>PoolCarz</div>
                <div className='container-fluid'>
                    {}
                </div>
            </nav >
        );
    }
}

export default Header;