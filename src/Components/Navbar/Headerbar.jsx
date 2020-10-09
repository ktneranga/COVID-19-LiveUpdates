import React, { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Headerbar(){
    return(
        <React.Fragment>
           {/* <Navbar bg="dark" variant="dark" sticky="top">
             <Container>
              <Navbar.Brand href="#home">
                <i class="fas fa-virus"></i>{' '}
                  COVID-19 Live Statistics
              </Navbar.Brand>
             </Container>
            </Navbar> */}
          
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
          <Container>
            <a class="navbar-brand" href="#"><h4><i class="fas fa-virus"></i> COVID-19 Live Statistics</h4></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">About</Link>
                </li>
              </ul>
            </div>
            </Container>
          </nav>
        </React.Fragment>
    )
}

export default Headerbar;