import React from 'react';
import "./Card.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="card">
                <h3>{this.props.title}</h3>
                <h4>{this.props.description}</h4>
            </div>
        )
    }
}

export default Card;