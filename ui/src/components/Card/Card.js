import React from 'react';
import "./Card.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            title: props.title,
            description: props.description,
            image: props.image
        }
    }

    render() {
        return(
            <div className="card">
                <h3>{this.state.title}</h3>
                <h4>{this.state.description}</h4>
            </div>
        )
    }
}

export default Card;