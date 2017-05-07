import React, { Component } from 'react';
import Place from './Place';
import { Grid, Row, Col } from 'react-bootstrap';


class PlacesList extends Component {

    renderPlaces(placesList) {
        const listItems = placesList.map((place) =>
            <Place place={place} />
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
                        <Col lg={6} lgOffset={3} md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
                            {this.renderPlaces(this.props.list)}
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default PlacesList;