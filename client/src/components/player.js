import React, { Component } from 'react';
import './Player.css';

class Player extends Component {

    render() {
        return (<div className="player">
            <p>{this.props.name}</p>
        </div >
        );
    }

}

export default Player;