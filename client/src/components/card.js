import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false
        }
    }
    render() {
        return (<div style={{
            margin: "auto",
            marginBottom: 0,
            zIndex: this.props.index
        }}
            id={"card_" + this.props.index}>
            <img height="auto"
                width="100"
                style={{ margin: -40 }}
                onClick={(sender) => {
                    if (sender.target.style.border == "") {
                        sender.target.style.border = "6px solid #b0c0ff";
                        sender.target.style.marginRight = "30px";
                        sender.target.style.marginLeft = "30px";
                        sender.target.style.zIndex = 500;
                        this.props.select(this.props.index);
                    } else {
                        this.props.select(-1);
                    }
                }}
                onMouseEnter={(sender) => { console.log(sender); sender.target.width = "200"; sender.target.offsetParent.children[this.props.index].style.zIndex = 1000 }}
                onMouseLeave={(sender) => {
                    sender.target.width = "100"; if (!this.state.selected) {
                        sender.target.offsetParent.children[this.props.index].style.zIndex = this.props.index
                    }
                }}
                src={this.props.image} />
            <p> {this.props.name} </p>
        </div >
        );
    }

}

export default Card;