import React from 'react';
import p5 from 'p5';

class Sketch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    this.renderSketch();
  }

  componentDidUpdate() {
    this.renderSketch();
  }

  renderSketch() {
    // clear
    document.getElementById(this.props.id).innerHTML = "";
    
    try {
      // convert the string to a runnable function
      let s = new Function(`return ${this.props.sketch}`)();

      // instantiate a new p5 sketch instance
      let render = new p5(s, this.props.id);
    } catch (err) {
      console.log("Failed to init sketch: ", err);
    }
  }

  render() {
    return (
      <div className="sketch-preview">
        <div id={this.props.id} className="sketch" />
      </div>
    );
  }
}

export default Sketch;
