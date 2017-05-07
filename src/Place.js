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
                    <p>Adres: {place.adres}</p>
                </Panel>
            </div>
        );
    }
}

export default Place;