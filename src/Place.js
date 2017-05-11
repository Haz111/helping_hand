import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class Place extends Component {
    /*
    props:
    1. name
    2. adres
    */

    renderIfDataExist(description, data) {
        if (data) return (<p>{description}{data}</p>);
    }

    render() {
        let place = this.props.place;
        
        return (
            <div>
                <Panel header={place.name}>
                    <p>Adres: <b>{place.adres}</b></p>
                    {this.renderIfDataExist("Dzień otwarcia: ", place.days)}
                    {this.renderIfDataExist("Godziny otwarcia: ", place.hours)}
                </Panel>
            </div>
        );
    }
}

export default Place;