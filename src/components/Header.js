import React, { Component } from 'react';
import './Headercss.css';

export class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">
                    <div className="icon" >
                        <span class="material-icons">
                            call</span>+9988456545 
                    </div>
                    <div className="icon">
                    <span class="material-icons">
                            email
                            </span>School@gmail.com
                    </div>
                    <div className="icon">
                        <span class="material-icons">
                        login
                        </span><a  className="upperlink"  href="#">Login/</a>
                        <span class="material-icons">
                        how_to_reg
                        </span>
                        <a  className="upperlink" href="#">Signup</a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
