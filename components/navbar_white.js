import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/navbar_white.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAdobe } from '@fortawesome/free-brands-svg-icons/faAdobe';


class Navbar_white extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a className="navbar-toggler" href="user"><img className="user-icon" src="/user-circle-solid.svg" height="35"></img></a>
                <a className="navbar-toggler mx-auto" href="#"><img src="/cs_icon_black.png" height="40"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="outerspace mx-auto">
                        <div className="d-flex justify-content-around">
                            <a className="" href="user"><img className="user-icon" src="/user-circle-solid.svg" height="35"></img></a>
                            <div className="navbar-nav">
                                <a href="#"><img src="/cs_icon_black.png" height="40"></img></a>
                                <a className="nav-link active" href="update">Prospective<span className="sr-only">(current)</span></a>
                                <a className="nav-link" href="article">Academic</a>
                                <a className="nav-link" href="#">Research</a>
                                <a className="nav-link" href="#">People</a>
                                <a className="nav-link" href="announce">News</a>
                                <a className="nav-link" href="#">Employment</a>
                                <a className="nav-link" href="#">Donate</a>
                            </div>
                            <div className="searchbar">
                                <a className="float-right nav-link" href="#"><p className="searchtext">Search McGill CS School<img className="user-icon ml-1" src="/search-solid.svg" height="15"></img></p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
}
export default Navbar_white