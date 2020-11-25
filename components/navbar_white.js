import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './navbar_white.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAdobe } from '@fortawesome/free-brands-svg-icons/faAdobe';


class Navbar_white extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand mx-5 user-icon" href="#">
                    <img src="/user-circle-solid.svg" height="50px" alt=""></img>
                </a>
                <a className="navbar-brand mx-5" href="#">
                    <img src="/cs_icon_black.png" height="55px" alt=""></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Prospective <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Academic</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Research</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">People</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Employment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Donate</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar_white