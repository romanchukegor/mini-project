import React from "react";
import icon from "images/dns.png";
import "./style.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({ textInput: event.target.value });
  };

  render() {
    const { total, searchFilter } = this.props;
    return (
      <div className="header">
        <div>
          <img src={icon} className="header__image" alt="" />
        </div>
        <div className="header__input-block">
          <input
            type="text"
            placeholder="Название товара"
            onChange={this.handleChange}
            className="header__input-block__input"
          />
          <button
            onClick={() => searchFilter(this.state.textInput)}
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
