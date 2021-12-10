import React, { Component } from 'react';
import './board.css';
import Player from './player';
import Card from './card';

class MyHand extends Component {

    render() {
        let myHand = [
            {
                name: "card 1",
                image: "/images/cardSample1.jpg"
            }, {
                name: "card 1",
                image: "/images/cardSample1.jpg"
            }, {
                name: "card 1",
                image: "/images/cardSample1.jpg"
            }, {
                name: "card 1",
                image: "/images/cardSample1.jpg"
            }];
        return (<div className="myHand">
            <p>La mia mano</p>
            <div style={{
                display: "inline-flex",
                justifyContent: "space-evenly",
                position: "absolute",
                bottom: 0,
                margin: "auto",
                right: 0,
                left: 0,
                width: "fit-content",
                height: 400
            }}>
                {
                    myHand.map((card, i) => {
                        return <Card name={card.name}
                            index={i}
                            image={card.image}
                            select={(selected) => {
                                for (let tmp = 0; tmp < myHand.length; tmp++) {
                                    if (tmp != selected) {
                                        document.getElementById("card_" + tmp).children[0].style.zIndex = tmp;
                                        document.getElementById("card_" + tmp).children[0].style.border = "";
                                        document.getElementById("card_" + tmp).children[0].style.border = "";
                                        document.getElementById("card_" + tmp).children[0].style.marginRight = "-40px";
                                        document.getElementById("card_" + tmp).children[0].style.marginLeft = "-40px";
                                    }
                                }
                            }} />
                    })
                }
            </div>
        </div >
        );
    }

}

class Board extends Component {
    render() {
        let players = ["mario", "carlo"];
        return (<div className="board">
            <div className="players">
                {
                    players.map(p => {
                        return <Player name={p} />
                    })
                }
            </div>
            <MyHand />
        </div >
        );
    }

}

export default Board;