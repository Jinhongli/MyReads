import React from 'react';

class SearchInput extends React.Component {
  render() {
    return (
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Add a book"
          />
        </div>
        <div className="control">
          <a className="button is-success">
            <i className="fa fa-search"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default SearchInput;
