import React, { Component } from "react";
import Buttons from "components/Buttons/Buttons";
import AddButton from "components/AddButton/AddButton";
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
      this.setState({ amount: this.state.amount - 1 });
    } else if (this.state.count < prevState.count) {
      this.setState({ amount: this.state.amount + 1 });
    }
    if (this.state.count > prevState.count) {
      this.props.totalSumInc(this.state.price, this.state.count);
    } else if (this.state.count < prevState.count) {
      this.props.totalSumDec(this.state.price, this.state.count);
    }
  }

  selectedProduct = () => {
    if (this.state.count === 0) {
      this.setState({ selectedProduct: true, count: 1 });
    }
  };

  removeProduct = () => {
    this.setState({
      selectedProduct: false,
      count: 0,
      amount: this.props.item.amount,
    });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { price, amount, name, img, count } = this.state;
    return (
      <div className="card">
        <div
          className={
            this.state.selectedProduct === false
              ? "card__inactive"
              : "card__active"
          }
        >
          <img
            src={img}
            alt=""
            className="card__inactive__img card__active__img"
          />
          <div
            style={{ fontWeight: "bold" }}
            className="card__inactive__info card__active__img"
          >
            {name}
          </div>
          <div className="card__inactive__info card__active__img">
            Цена: {price}
          </div>
          <div className="card__inactive__info card__active__img">
            Всего: {amount}
          </div>
        </div>
        {count !== 0 ? (
          <Buttons
            count={count}
            increment={this.increment}
            decrement={this.decrement}
            amount={amount}
            removeProduct={this.removeProduct}
          />
        ) : (
          <AddButton selectedProduct={this.selectedProduct} />
        )}
      </div>
    );
  }
}

export default Card;
