import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../services/firebase";


export default class Logout extends Component {
  render() {
    return (
        <header>
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              {auth().currentUser ? (
                <div className="navbar-nav">
                  <button
                    className="btn btn-primary"
                    onClick={() => auth().signOut()}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/login">
                    Sign In
                  </Link>
                  <Link className="nav-item nav-link" to="/signup">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </header>
      );
    }
    
  }

