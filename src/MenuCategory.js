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
                <Link to={'/kitchens'}><Button bsStyle="primary" bsSize="large" block>Posiłki - kuchnie</Button></Link>
                <Link to={'/packed_food'}><Button bsStyle="primary" bsSize="large" block>Posiłki - suchy prowiant</Button></Link>  
                <Link to={'/shelter_women'}><Button bsStyle="primary" bsSize="large" block>Schronienie - kobiety</Button></Link>  
                <Link to={'/shelter_men'}><Button bsStyle="primary" bsSize="large" block>Schronienie - mężczyźni</Button></Link>  
                <Link to={'/baths'}><Button bsStyle="primary" bsSize="large" block>Łaźnie</Button></Link>  
                <Link to={'/medical'}><Button bsStyle="primary" bsSize="large" block>Pomoc medyczna</Button></Link>  
                <Link to={'/medicines'}><Button bsStyle="primary" bsSize="large" block>Leki</Button></Link>  
                <Link to={'/clothes'}><Button bsStyle="primary" bsSize="large" block>Ubrania</Button></Link>
              </ButtonToolbar>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default MenuCategory;