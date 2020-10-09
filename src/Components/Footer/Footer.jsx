import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(){
    return(
        <React.Fragment>
            <section className="bg-dark text-light pt-5 pb-5">
                <div className="row text-center">
                   
                    <div className="col-12">
                       
                       <h4><i class="fas fa-virus"></i> COVID-19 Live Statistics</h4>
                   <hr className="bg-secondary"></hr>
                   <p>Made by <i className="fas fa-heart text-danger"></i> Terra-Codz (Teran Neranga)</p>
                   </div>
                
                    
                      
                     </div>
                    
                
               
            </section>
        </React.Fragment>
    )
}

export default Footer;