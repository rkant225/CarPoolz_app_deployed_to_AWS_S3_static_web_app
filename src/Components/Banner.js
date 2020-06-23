import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className='navbar navbar-default navbar-fixed-top' style={{"backgroundColor":"#0000004a","height":"3em","top":"3.5em"}}>
                {/* <div>
                    <p></p>
                </div> */}
                <center>
                  <div style={{"color": "white"}}>
                        <span style={{"position": "relative", "top": ".75em","fontSize":"1.3em"}}>Friends don't let friends ride alone.</span>
                    </div>
                    </center>
            </nav >
        );
    }
}

export default Header;