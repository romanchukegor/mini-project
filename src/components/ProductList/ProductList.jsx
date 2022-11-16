import React from "react";
import Header from "components/Header/Header";
import Card from "components/Card/Card";
import list from "constants";
import "./style.scss";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      total: 0,
      searchedList: [],
    };
  }

  componentDidMount() {
    this.setState({
      searchedList: [...this.state.searchedList, ...this.state.list],
    });
  }

  totalSumIncrement = (price) => {
    this.setState((prevState) => ({ total: prevState.total + price }));
  };

  totalSumDecrement = (price) => {
    this.setState((prevState) => ({ total: prevState.total - price }));
  };

  searchFilter = (textInput) => {
    const cards = this.state.list.filter((card) => {
      return card.name.toLowerCase().includes(textInput.toLowerCase());
    });
    this.setState({ searchedList: cards, isError: false });
  };

  render() {
    return (
      <div className="container">
        <Header
          total={this.state.total}
          textInput={this.textInput}
          searchFilter={this.searchFilter}
        />
        <div className="container__products">
          {this.state.searchedList.map((item) => (    
              <Card
                item={item}
                key={item.id}
                totalSumIncrement={this.totalSumIncrement}
                totalSumDecrement={this.totalSumDecrement}
                count={this.state.count}
              />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
