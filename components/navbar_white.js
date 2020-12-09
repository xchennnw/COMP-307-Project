import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './styles/navbar_white.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faAdobe } from '@fortawesome/free-brands-svg-icons/faAdobe';


class Navbar_white extends React.Component {

    constructor(props) {
        super(props);
        this.state = {login:false };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }
  
    
    handleClick1() {
          this.setState(prevState => ({
             login:!prevState.login
          }));
    }
    handleClick2() {
        this.setState(prevState => ({
           login:false
        }));
      }

    render() {
        let content;
        const loginnn = this.state.login;
        if (loginnn) {
            content=(
               
              <div className="listtt2" onClick={this.handleClick2}>
                        <ul>
                           <li className="lii"> <a className="nav-link22" href="update">Prospective</a></li>
                           <li className="lii"> <a className="nav-link22" href="article">Article</a></li> 
                           <li className="lii"> <a className="nav-link22" href="research">Research</a></li>
                           <li className="lii"><a className="nav-link22" href="people">People</a></li>
                           <li className="lii"><a className="nav-link22" href="announce">Announcement</a></li>
                           <li className="lii"><a className="nav-link22" href="employ">Employment</a></li>
                           <li className="lii"><a className="nav-link22" href="donate">Donate</a></li>
                           
                           </ul>
                
              </div>
            );               
          }else{
            content=(
                <div></div>              
            );
          }
  
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <a className="navbar-toggler" href="user"><img className="user-icon" src="/user-circle-solid.svg" height="35"></img></a>
                <a className="navbar-toggler mx-auto" href="#"><img src="/cs_icon_black.png" height="40"></img></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" onClick={this.handleClick1}>
                    <span className="navbar-toggler-icon"></span>
                    {content}
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="outerspace mx-auto">
                        <div className="d-flex justify-content-around">
                            <a className="" href="user"><img className="user-icon" src="/user-circle-solid.svg" height="35"></img></a>
                            <div className="navbar-nav">
                                <a href="/"><img src="/cs_icon_black.png" height="40"></img></a>
                                <a className="nav-link active" href="update">Prospective<span className="sr-only">(current)</span></a>
                                <a className="nav-link" href="article">Article</a>
                                <a className="nav-link" href="research">Research</a>
                                <a className="nav-link" href="people">People</a>
                                <a className="nav-link" href="announce">Announcement</a>
                                <a className="nav-link" href="employ">Employment</a>
                                <a className="nav-link" href="donate">Donate</a>
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