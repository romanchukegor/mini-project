import React from "react";
import Header from "components/Header/Header";
import Card from "components/Card/Card";
import list from "components/db/db";
import "./style.scss";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      total: 0,
      textInput: "",
    };
  }

  handleChange = (event) => {
    this.setState({ textInput: event.target.value });
  };

  totalSumInc = (price) => {
    this.setState((prevState) => ({ total: prevState.total + price }));
  };

  totalSumDec = (price) => {
    this.setState((prevState) => ({ total: prevState.total - price }));
  };

  render() {
    return (
      <div className="container">
        <Header
          total={this.state.total}
          textInput={this.textInput}
          handleChange={this.handleChange}
          searchFilter={this.searchFilter}
        />
        <div className="container__products">
          {this.state.list
            .filter((card) => {
              return card.name
                .toLowerCase()
                .includes(this.state.textInput.toLowerCase());
            })
            .map((item) => {
              return (
                <Card
                  item={item}
                  key={item.id}
                  totalSumInc={this.totalSumInc}
                  totalSumDec={this.totalSumDec}
                  count={this.state.count}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Cart;
