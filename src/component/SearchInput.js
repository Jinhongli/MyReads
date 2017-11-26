import React from 'react';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  state = {
    value: '',
  };
  handleInput(e) {
    this.setState({
      value: e.target.value,
    });
  }
  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.onSearch(this.state.value);
    }
  }
  clearInput() {
    this.setState({
      value: '',
    });
  }
  render() {
    return (
      <div className="header-search field has-addons">
        <div className="control header-search-input">
          <input
            className="input"
            type="text"
            placeholder="Add a book"
            value={this.state.value}
            onChange={e => this.handleInput(e)}
            onKeyDown={e => this.handleKeyDown(e)}
          />
          <span
            className="icon header-search-clear"
            onClick={() => this.clearInput()}
          >
            <i className="fa fa-times-circle" />
          </span>
        </div>
        <div className="control">
          <button
            className="button is-success"
            onClick={() => this.props.onSearch(this.state.value)}
          >
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
