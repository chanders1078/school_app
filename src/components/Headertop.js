import React, { Component } from 'react';
import './Headercss.css';

export class Headertop extends Component {
    render() {
        return (
            <div>
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-info col-lg-6 col-sm-6 col-md-6 m-auto">
                                    <ul className="list-unstyled">
                                        <li><i class="fas fa-phone-alt"></i>+9998845654</li>
                                        <li><i class="fas fa-envelope"></i>GSSS@gmail.com</li>
                                    </ul>
                                </div>
                                <div className="login-info col-lg-6 col-sm-6 col-md-6 m-auto">
                                    <ul className="list-unstyled">
                                        <li className="nav-item">
                                            <a href="#"><i class="fas fa-sign-in-alt"></i>Login</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#"><i class="fas fa-user-plus"></i>SingUp</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Headertop;
