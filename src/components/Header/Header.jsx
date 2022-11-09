import React from "react";
import "./style.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { handleChange, searchFilter, total } = this.props;
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
            onChange={handleChange}
            className="header__input-block__input"
          />
          <button
            onClick={searchFilter}
            className="header__input-block__button"
          >
            ПОИСК
          </button>
        </div>
        <div>
          <p className="header__text">
            Общая стоимость выбранных товаров: {total} р.
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
