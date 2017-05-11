import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Place extends Component {
    /*
    props:
    1. name
    2. adres
    */
    render() {
        let place = this.props.place;
        return (
            <div>
                <Panel header={place.name}>
                    <p>Adres: <b>{place.adres}</b></p>
                    <p>Dzień otwarcie: {place.days}</p>
                    <p>Godziny otwarcia: {place.hours}</p>
                </Panel>
            </div>
        );
    }
}

export default Place;