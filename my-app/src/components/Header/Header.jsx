import React from "react";
import "./Header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGTrCzs9PIjwaK-EEPQoNbNG7LWmekYpVCTw&usqp=CAU"
            className="header__image"
            alt=""
          />
        </div>
        <div className="header__input-block">
          <input
            type="text"
            placeholder="Название товара"
            onChange={this.props.handleChange}
          />
          <button onClick={this.props.searchFilter}>ПОИСК</button>
        </div>
        <div className="header__text">
          <p>Общая стоимость выбранных товаров: {this.props.total} р.</p>
        </div>
      </div>
    );
  }
}

export default Header;
