import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap';

function About(){
    return(
        <React.Fragment>
            <Container>
                <Jumbotron className="mt-5">
                        
                        <h1>Hello, I am Teran!</h1>
                        <p>
                            This COVID-19 Live updates web application is created by a Software Engineer and a undergraduate at Faculty of Computing at SLIIT.
                        </p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    
                </Jumbotron>
            </Container>
                
        </React.Fragment>
    )
}

export default About;