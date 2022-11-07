import React, { Component } from "react";
import "./style.scss";

class Buttons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      disableInc: false,
      disableDec: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.count !== prevProps.count) {
      this.switchDisableInc(this.props.count);
    }
    if (this.props.amount !== prevProps.amount) {
      this.switchDisableDec(this.props.amount);
    }
  }

  switchDisableInc = (count) => {
    if (count === 1) {
      this.setState({ disableInc: true });
    } else {
      this.setState({ disableInc: false });
    }
  };

  switchDisableDec = (amount) => {
    if (amount === 0) {
      this.setState({ disableDec: true });
    } else {
      this.setState({ disableDec: false });
    }
  };

  render() {
    return (
      <div className="card__count">
        <button onClick={this.props.decrement} disabled={this.state.disableInc}>
          -
        </button>
        <p>{this.props.count}</p>
        <button onClick={this.props.increment} disabled={this.state.disableDec}>
          +
        </button>
      </div>
    );
  }
}

export default Buttons;
