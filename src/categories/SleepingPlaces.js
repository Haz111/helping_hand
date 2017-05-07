import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import PlacesList from '../PlacesList';
import { Grid, Row, Col } from 'react-bootstrap';

class SleepingPlaces extends Component {

    constructor() {
    super();
    this.placesData = {
      name: "Schroniska i noclegownie",
      description: "Miejsca w których bezdomni mogą się przespać.",
      places: [
        {
          name: 'Chrześcijański Ośrodek Pomocy Bezdomnym "Dom Korneliusza"',
          adres: "ul. Koprowa 4"
        },
        {
          name: "Noclegownia i Schronisko dla Bezdomnych Mężczyzn",
          adres: "ul. Makuszyńskiego 19a"
        },
        {
          name: "Schronisko dla Bezdomnych Kobiet",
          adres: "ul. Sołtysowska 13c"
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

export default SleepingPlaces;