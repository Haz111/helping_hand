import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Jumbotron } from 'react-bootstrap';
import MenuCategory from './MenuCategory';
import PlacesPage from './PlacesPage';

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
            <Route exact path="/helping_hand" component={MenuCategory} />
            <Route path="/helping_hand/:category" component={PlacesPage} />
            <Route path="/:category" component={PlacesPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;