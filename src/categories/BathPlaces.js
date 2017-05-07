import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import PlacesList from '../PlacesList';
import { Grid, Row, Col } from 'react-bootstrap';

class BathPlaces extends Component {

  constructor() {
    super();
    this.placesData = {
      name: "Łaźnie",
      description: "Darmowe łaźnie dla bezdomnych",
      places: [
        {
          name: "Przytulisko im. św. Brata Alberta dla Bezdomnych Mężczyzn",
          adres: "Kraków, ul. Kościuszki 23"
        },
        {
          name: "Krakowskie Centrum Bezdomnych",
          adres: "Kraków, ul. Pawia 22"
        }
      ]
    };
  }
  
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={6} lgOffset={3} md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
              <p className="text-center">{this.placesData.name}</p>
              <p className="text-center">{this.placesData.description}</p>
            </Col>
          </Row>
          <PlacesList list={this.placesData.places} />
        </Grid>
      </div>
    )
  }

}

export default BathPlaces;