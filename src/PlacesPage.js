import React, { Component } from 'react';
import PlacesList from './PlacesList';
import { Grid, Row, Col } from 'react-bootstrap';
import placesData from './data.json';

class PlacesPage extends Component {
  
  render() {
    let placeData = placesData[this.props.location.pathname.slice(1,)]; 
    
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col lg={6} lgOffset={3} md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
              <p className="text-center">{placeData.name}</p>
              <p className="text-center">{placeData.description}</p>
            </Col>
          </Row>
          <PlacesList list={placeData.places} />
        </Grid>
      </div>
    )
  }

}

export default PlacesPage;