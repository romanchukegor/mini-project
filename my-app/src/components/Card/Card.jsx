import React, { Component } from "react";
import Buttons from "../Buttons/Buttons";
import AddButton from "../AddButton/AddButton";
import "./Card.scss";

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
      this.setState({ amount: prevState.amount - 1 });
    } else if (this.state.count < prevState.count) {
      this.setState({ amount: prevState.amount + 1 });
    }
    if (this.state.count > prevState.count) {
      this.props.totalSumInc(this.state.price);
    } else if (this.state.count < prevState.count) {
      this.props.totalSumDec(this.state.price);
    }
  }

  selectedProduct = () => {
    if (this.state.count === 0) {
      this.setState({ selectedProduct: true });
      this.setState({ count: 1 });
    } else {
      this.setState({ selectedProduct: false });
      this.setState({ count: 0 });
    }
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="card-container">
        <div
          className={
            this.state.selectedProduct === false ? "card" : "card-active"
          }
        >
          <img src={this.state.img} alt="" />
          <div style={{ fontWeight: "bold" }}>{this.state.name}</div>
          <div>Цена: {this.state.price}</div>
          <div>Всего: {this.state.amount}</div>
        </div>
        {this.state.count !== 0 ? (
          <Buttons
            count={this.state.count}
            increment={this.increment}
            decrement={this.decrement}
            amount={this.state.amount}
          />
        ) : (
          <AddButton selectedProduct={this.selectedProduct} />
        )}
      </div>
    );
  }
}

export default Card;
