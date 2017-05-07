import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Grid, Navbar, Jumbotron, Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap';
import MenuCategory from './MenuCategory';
import EatingPlaces from './categories/EatingPlaces';
import SleepingPlaces from './categories/SleepingPlaces';
import MedicinePlaces from './categories/MedicinePlaces';
import BathPlaces from './categories/BathPlaces';
import DoctorPlaces from './categories/DoctorPlaces';

// This example shows how to render two different screens
// (or the same screen in a different context) at the same url,
// depending on you got there.
//
// Click the colors and see them full screen, then "visit the
// gallery" and click on the colors. Note the URL and the component
// are the same as before but now we see them inside a modal
// on top of the old screen.


class App extends Component {

  render() {
    return(
      <div>
        <Jumbotron className="text-center">
          <Grid>
            <h1>Pomocna dłoń</h1>
            <p>Bo pomagać możesz zawsze</p> 
          </Grid>
        </Jumbotron>
        <Router>
          <Switch>
            <Route exact path="/" component={MenuCategory} />
            <Route path="/eating/" component={EatingPlaces} />
            <Route path="/sleeping/" component={SleepingPlaces} />
            <Route path="/medicines" component={MedicinePlaces} />
            <Route path="/baths" component={BathPlaces} />
            <Route path="/doctor" component={DoctorPlaces} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;