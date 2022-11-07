import React, { Component } from 'react';

class AddButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.selectedProduct}>Добавить в корзину</button>
            </div>
        );
    }
}

export default AddButton;