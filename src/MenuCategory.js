import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Row, Col, ButtonToolbar } from 'react-bootstrap';


class MenuCategory extends Component {
  
  render() {
    return (
      <div>
        <Grid>
          <p className="text-center header">Jakiej pomocy szukasz?</p>
          <Row className="show-grid">
            <Col className="text-center" lg={6} lgOffset={3} md={4} mdOffset={4} sm={6} smOffset={3} xs={10} xsOffset={1}>
            <ButtonToolbar>
              <Link to={'/eating'}><Button bsStyle="primary" bsSize="large" block>jedzenie</Button></Link>
              <Link to={'/sleeping'}><Button bsStyle="primary" bsSize="large" block>spanie</Button></Link>
              <Link to={'/medicines'}><Button bsStyle="primary" bsSize="large" block>leki</Button></Link>
              <Link to={'/baths'}><Button bsStyle="primary" bsSize="large" block>łaźnie</Button></Link>
              <Link to={'/doctor'}><Button bsStyle="primary" bsSize="large" block>lekarze</Button></Link>  
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default MenuCategory;