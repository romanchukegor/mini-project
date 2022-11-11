import React from "react";
import Header from "components/Header/Header";
import Card from "components/Card/Card";
import list from "db/db";
import "./style.scss";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      total: 0,
      textInput: "",
      filtered: [],
    };
  }

  componentDidMount() {
    this.setState({ filtered: [...this.state.filtered, ...this.state.list] });
  }

  handleChange = (event) => {
    this.setState({ textInput: event.target.value });
  };

  totalSumIncrement = (price) => {
    this.setState((prevState) => ({ total: prevState.total + price }));
  };

  totalSumDecrement = (price) => {
    this.setState((prevState) => ({ total: prevState.total - price }));
  };

  searchFilter = () => {
    const cards = this.state.list.filter((card) => {
      return card.name
        .toLowerCase()
        .includes(this.state.textInput.toLowerCase());
    });
    this.setState({ filtered: cards, isError: false });
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
          {this.state.filtered.map((item) => {
            return (
              <Card
                item={item}
                key={item.id}
                totalSumIncrement={this.totalSumIncrement}
                totalSumDecrement={this.totalSumDecrement}
                count={this.state.count}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
