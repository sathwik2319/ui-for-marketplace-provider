import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import './NavBar.css'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 500,
            outDuration:500
        });
    }

    render() {
        return (
            <div>
                <ul id="slide-out" className="sidenav length">
                    <li />
                    <li>
                        <a href="#!">
                            <i className="material-icons">laptop</i>Menu
                        </a>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>
                    <li>
                        <Link className="waves-effect" to="/profile">
                        <i className="material-icons">person</i> Profile
                        </Link>
                    </li>
                   
                    <li>
                        <Link className="waves-effect" to="/provider">
                        <i className="material-icons">person_add</i> Become a provider
                        </Link>
                    </li>

                    <li>
                    <Link  className="waves-effect"  to= '/about'>
                        
                        <i className="material-icons">subdirectory_arrow_right</i> About
                        </Link>
                    </li>

                    <li>
                        <a className="waves-effect" href="#!">
                        <i className="material-icons">subdirectory_arrow_right</i> Log Out
                        </a>
                    </li>
                </ul>
                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        );
    }
}

export default Sidebar;