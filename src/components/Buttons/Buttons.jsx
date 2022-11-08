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
    if (this.props.amount !== prevProps.amount) {
      if (this.props.count === 1) {
        this.setState({ disableDec: !this.state.disableDec });
      } else if (this.props.amount === 0) {
        this.setState({ disableInc: !this.state.disableInc });
      } else {
        this.setState({ disableInc: false, disableDec: false });
      }
    }
  }

  render() {
    const { decrement, increment, removeProduct } = this.props;
    const { disableInc, disableDec } = this.state;
    return (
      <div className="card__count">
        <button onClick={decrement} disabled={disableDec}>
          -
        </button>
        <p>{this.props.count}</p>
        <button onClick={increment} disabled={disableInc}>
          +
        </button>
        <button onClick={removeProduct}>Удалить</button>
      </div>
    );
  }
}

export default Buttons;
