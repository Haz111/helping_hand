import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import PlacesList from '../PlacesList';
import { Grid, Row, Col } from 'react-bootstrap';

class EatingPlaces extends Component {

  constructor() {
    super();
    this.placesData = {
      name: "Jedzenie",
      description: "Miejsca w których bezdomni mogą otrzymać darmowe posiłki.",
      places: [
        {
          name: "Siostry Felicjanki - dzieło pomocy o. Pio",
          adres: "ul. Smoleńsk 4",
          hours: "pon-pt 13:00 - 16:00, sb 13:00 - 15:00"
        },
        {
          name: "Dzieło pomocy o. Pio",
          adres: "ul. Reformacka 4",
          hours: "16:00 - 17:00"
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

export default EatingPlaces;