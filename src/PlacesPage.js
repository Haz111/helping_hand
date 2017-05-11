import React, { Component } from 'react';
import PlacesList from './PlacesList';
import { Grid, Row, Col } from 'react-bootstrap';

class PlacesPage extends Component {

  constructor() {
    super();
    this.placesData = {
      eating: {
        name: "Jedzenie",
        route: "eating",
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
      },
      sleeping: {
        name: "Schroniska i noclegownie",
        route: "sleeping",
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
      },
      baths: {
        name: "Łaźnie",
        route: "baths",
        description: "Darmowe łaźnie dla bezdomnych",
        places: [
          {
            name: "Przytulisko im. św. Brata Alberta dla Bezdomnych Mężczyzn",
            adres: "Kraków, ul. Kościuszki 23"
          },
          {
            name: "Krakowskie Centrum Bezdomnych",
            adres: "Kraków, ul. Pawia 22"
          }
        ]
      },
      doctor: {
        name: "Lekarz",
        route: "doctor",
        description: "Miejsca w których bezdomni mogą otrzymać darmową pomoc lekarską.",
        places: [
          {
            name: "Centrum Kompleksowej Pomocy Bezdomnym i Najuboższym",
            adres: "ul. Smoleńsk 4",
            hours: ""
          },
          {
            name: "Lekarze Nadziei",
            adres: "Kraków, ul. Olszańska 5",
            hours: ""
          }
        ]
      },
      medicines: {
        name: "Lekarstwa",
        route: "medicines",
        description: "Miejsca w których bezdomni mogą otrzymać darmowe lekarstwa.",
        places: []
      }
    }
  }
  
  render() {
    let placeData = this.placesData[this.props.location.pathname.slice(1,)]; 

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