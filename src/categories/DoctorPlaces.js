import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import PlacesList from '../PlacesList';
import { Grid, Row, Col } from 'react-bootstrap';

class DoctorPlaces extends Component {

    constructor() {
    super();
    this.placesData = {
      name: "Lekarz",
      description: "Miejsca w których bezdomni mogą otrzymać darmową pomoc lekarską.",
      places: [
        {
          name: "Centrum Kompleksowej Pomocy Bezdomnym i Najuboższym",
          adres: "ul. Smoleńsk 4",
          hours: ""
        },
        {
          name: "Lekarze Nadziei",
          adres: "Kraków, ul. Olszańska 5",
          hours: ""
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

export default DoctorPlaces;