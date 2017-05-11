import React, { Component } from 'react';
import Place from './Place';
import { Grid, Row, Col } from 'react-bootstrap';


class PlacesList extends Component {

    renderPlaces(placesList) {
        const listItems = placesList.map((place, index) =>
            <Place place={place} key={index} />
        );
        return (
            <div>{listItems}</div>
        );
    }

    render() {
        return(
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col lg={6} lgOffset={3} md={8} mdOffset={2} sm={10} smOffset={1} xs={12}>
                            {this.renderPlaces(this.props.list)}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PlacesList;