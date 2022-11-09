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
      <div className="counter">
        <button
          onClick={decrement}
          disabled={disableDec}
          className="counter__button"
        >
          -
        </button>
        <p>{this.props.count}</p>
        <button
          onClick={increment}
          disabled={disableInc}
          className="counter__button"
        >
          +
        </button>
        <button onClick={removeProduct} className="counter__delete-button">
          Удалить
        </button>
      </div>
    );
  }
}

export default Buttons;
