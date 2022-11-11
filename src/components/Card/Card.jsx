import React, { Component } from "react";
import Buttons from "components/Buttons/Buttons";
import "./style.scss";

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id,
      price: this.props.item.price,
      amount: this.props.item.amount,
      name: this.props.item.name,
      img: this.props.item.img,
      count: 0,
      selectedProduct: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count > prevState.count) {
      this.props.totalSumIncrement(this.state.price);
    } else if (this.state.count < prevState.count) {
      this.props.totalSumDecrement(this.state.price);
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      amount: this.state.amount - 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
      amount: this.state.amount + 1,
    });
  };

  render() {
    const { price, amount, name, img, count } = this.state;
    return (
      <div className="card">
        <div
          className={this.state.count === 0 ? "card__inactive" : "card__active"}
        >
          <img
            src={img}
            alt=""
            className="card__inactive__img card__active__img"
          />
          <div className="card__inactive__info card__active__info">{name}</div>
          <div className="card__inactive__info card__active__info">
            Цена: {price}
          </div>
          <div className="card__inactive__info card__active__info">
            Всего: {amount}
          </div>
        </div>
        <Buttons
          count={count}
          increment={this.increment}
          decrement={this.decrement}
          amount={amount}
          removeProduct={this.removeProduct}
        />
      </div>
    );
  }
}

export default Card;
