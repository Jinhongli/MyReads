import React from 'react';
import { Link } from 'react-router-dom';

class SearchInput extends React.Component {
  state = {
    value: '',
  };
  handleInput(e) {
    this.setState({
      value: e.target.value,
    });
  }
  handleSubmit() {
    console.log('search ' + this.state.value);
  }
  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Add a book"
            value={this.state.value}
            onChange={e => this.handleInput(e)}
          />
        </div>
        <div className="control">
          <Link className="button is-success" to={'/search?keywords=' + this.state.value}>
            <i className="fa fa-search" />
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchInput;
