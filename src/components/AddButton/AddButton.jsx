import React, { Component } from "react";
import "./style.scss";

class AddButton extends Component {
  render() {
    return (
      <div className="add-button">
        <button onClick={this.props.selectedProduct}>Добавить в корзину</button>
      </div>
    );
  }
}

export default AddButton;
