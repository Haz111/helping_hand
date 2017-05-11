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
                <Link to={'/kitchen'}><Button bsStyle="primary" bsSize="large" block>posiłki - kuchnie</Button></Link>
                <Link to={'/packed_food'}><Button bsStyle="primary" bsSize="large" block>posiłki - suchy prowiant</Button></Link>  
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default MenuCategory;