import React, { Component } from 'react';
import './Headercss.css';

export class Header extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <nav className="navbar navbar-expend-lg navbar-dark text-light  ">
                    <span class="material-icons">phone 
                        </span> <p>+9988785652</p>
                    <p>icon2</p>
                    <p>
                        <a>Login</a>/<a>Signup</a>
=======
                <nav className="navbar navbar-expend-lg navbar-dark">
                    <p>Icon</p>
                    <p><i className="icon-phone"></i>9988785652</p>
                    <p>icon2</p>
                    <p>
                        <a href="#">Login</a>/<a>Signup</a>
>>>>>>> front
                    </p>
                </nav>
                <nav className="navbar  navbar-expand-lg navbar-light bg-light ">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcontent" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarcontent">
                        <ul className="navbar-nav  ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home<hr/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About<hr/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Course<hr/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact<hr/></a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        );
    }
}

export default Header;
