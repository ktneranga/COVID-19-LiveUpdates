import React from 'react';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Headerbar(){
    return(
        <React.Fragment>
          
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
          <Container>
            <Link className="navbar-brand" to="/"><h4><i className="fas fa-virus"></i> COVID-19 Live Statistics</h4></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
            </Container>
          </nav>
        </React.Fragment>
    )
}

export default Headerbar;