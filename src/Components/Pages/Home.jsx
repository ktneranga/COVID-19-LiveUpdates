import React,{useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import moment from 'moment'
import CardColumns from 'react-bootstrap/CardColumns'
import Form from 'react-bootstrap/Form'
import BeatLoader from "react-spinners/BeatLoader";
import NumberFormat from 'react-number-format';

function Home() {

  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.all(
      [
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries")
      ]
    ).then(responseArr=>{
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
      setLoading(false);
      // console.log(responseArr[1].data);
    }).catch(err=>{
      console.log(err);
    });
  },[]);

  const filterCountries = results.filter(item=>{
    return searchCountries !== ""? item.country.toLowerCase().includes(searchCountries.toLowerCase()) : item;
  })
  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const countries = filterCountries.map((data,i) =>{
    return(
      <Card 
      key = {i}
      bg="light" 
      text="dark" 
      className="text-center mt-3 shadow"> 
          <Card.Img variant="top" src={data.countryInfo.flag} width="100%" height="250px" />
          <Card.Body>
            <Card.Title>{data.country}</Card.Title>
            <Card.Text>Cases : 
            <NumberFormat 
              value={data.cases}
              displayType={"text"}
              thousandSeparator={true}
             />
            </Card.Text>
            <Card.Text>Deaths : 
              <NumberFormat 
                value={data.deaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card.Text>
            <Card.Text>Recovered : 
              <NumberFormat 
                  value={data.recovered}
                  displayType={"text"}
                  thousandSeparator={true}
                />
            </Card.Text>
            <Card.Text>Today's cases : 
              <NumberFormat 
                  value={data.todayCases}
                  displayType={"text"}
                  thousandSeparator={true}
                />
            </Card.Text>
            <Card.Text>Today's deaths : 
              <NumberFormat 
                    value={data.todayDeaths}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
            </Card.Text>
            <Card.Text>Today's recovered : 
                  <NumberFormat 
                    value={data.todayRecovered}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
            </Card.Text>
            <Card.Text>Active : 
              <NumberFormat 
                value={data.active}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card.Text>
            <Card.Text>Critical : 
            <NumberFormat 
              value={data.critical}
              displayType={"text"}
              thousandSeparator={true}
            />
            </Card.Text>
          </Card.Body>
          <Card.Footer >
            <small >Last updated {moment(lastUpdated).format('LLLL')}</small>
          </Card.Footer>
        </Card>
    )
  })

  return (
    <React.Fragment>

      <div className="mt-5" style={{display: "flex", justifyContent:"center"}}>
      <BeatLoader
          size={20}
          color={"#36D7B7"}
          loading={loading}
        />
      </div>
     
      <Container>
      <div className="row mt-3 text-center mb-5">
        <div className="col-12"> 
            <h2>COVID-19 Global Updates</h2>
            <h5>Developed by Teran Neranga</h5>
        </div>
      </div>
      <CardDeck>
        <Card bg="secondary" text="white" className="text-center"> 
          <Card.Body>
            <Card.Title>Total Cases</Card.Title>
            <Card.Text className="h1">
             {/* <h1>{latest.cases}</h1> */}
             <NumberFormat 
              value={latest.cases}
              displayType={"text"}
              thousandSeparator={true}
             />
            </Card.Text>
          </Card.Body>
          <Card.Footer >
            <small >Last updated {moment(lastUpdated).format('LLLL')}</small>
          </Card.Footer>
        </Card>
        <Card bg="danger" text="white" className="text-center">
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text className="h1">
             {/* <h1>{latest.deaths}</h1> */}
             <NumberFormat 
              value={latest.deaths}
              displayType={"text"}
              thousandSeparator={true}
             />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {moment(lastUpdated).format('LLLL')}</small>
          </Card.Footer>
        </Card>
        <Card bg="success" text="light" className="text-center">
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text className="h1">
              <NumberFormat 
              value={latest.recovered}
              displayType={"text"}
              thousandSeparator={true}
             />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small >Last updated {moment(lastUpdated).format('LLLL')}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br></br>
      <div className="row mt-5 text-center">
        <div className="col-12"> 
            <h2>Search for Countries</h2>
        </div>
      </div>

      <Form className="mb-5">
        <Form.Group controlId="formGroupSearch">
          <Form.Control type="text" placeholder="Search a Country..." onChange={e=>setSearchCountries(e.target.value)} />
        </Form.Group>
      </Form>
      
      <CardColumns>
          {countries}
      </CardColumns>

      </Container>

    </React.Fragment>
  );
}

export default Home;
