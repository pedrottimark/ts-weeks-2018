import React, {Component} from 'react';

const QUANTITY_REGEXP = /^\d+$/;

class QuantityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
      quantity: this.props.quantity.toString(),
    };
  }

  _onSubmit = event => {
    event.preventDefault();
    this.props.updateQuantity(Number(this.state.quantity));
  }

  _onCancel = event => {
    event.preventDefault();
    this.props.closeForm();
  }

  _onChange = event => {
    const quantity = event.target.value;
    this.setState({
      isValid: QUANTITY_REGEXP.test(quantity) && Number(quantity) !== this.props.quantity,
      quantity,
    });
  }

  render() {
    const {isFetching} = this.props;
    const {isValid, quantity} = this.state;
    return (
      <form name="portion" onSubmit={this._onSubmit}>
        <input type="number" disabled={isFetching} value={quantity} onChange={this._onChange}/>
        <button type="submit" disabled={!isValid || isFetching}>{isFetching ? 'Updating…' : 'Update'}</button>
        <button disabled={isFetching} onClick={this._onCancel}>Cancel</button>
      </form>
    );
  }
}

export default QuantityForm;
