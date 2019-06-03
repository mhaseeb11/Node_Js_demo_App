import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <span className="navbar-brand" style={{color: "#fff"}}><strong>Schedule UI</strong></span>
            </nav>
        )
    }
}

export default Header;