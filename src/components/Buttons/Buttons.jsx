import React from "react";
import "./style.scss";

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disableIncrementButton: false,
      disableDecrementButton: true,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.count !== prevProps.count) {
      if (this.props.count === 0) {
        this.setState({
          disableDecrementButton: !this.state.disableDecrementButton,
        });
      } else if (this.props.amount === 0) {
        this.setState({
          disableIncrementButton: !this.state.disableIncrementButton,
        });
      } else {
        this.setState({
          disableIncrementButton: false,
          disableDecrementButton: false,
        });
      }
    }
  }

  render() {
    const { decrement, increment } = this.props;
    const { disableIncrementButton, disableDecrementButton } = this.state;
    return (
      <div className="counter">
        <button
          onClick={decrement}
          disabled={disableDecrementButton}
          className="counter__button"
        >
          -
        </button>
        <p>{this.props.count}</p>
        <button
          onClick={increment}
          disabled={disableIncrementButton}
          className="counter__button"
        >
          +
        </button>
      </div>
    );
  }
}

export default Buttons;
