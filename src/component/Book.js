import React from 'react';
import PropTypes from 'prop-types';

class Book extends React.Component {
  static propTypes = {
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      cover: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { name, authors, cover } = this.props.info;
    const bookCoverUrl = {
      backgroundImage: `url(${cover || ''})`,
    };
    return (
      <div className="book column is-narrow">
        <div className="book-top">
          <div className="book-cover" style={bookCoverUrl} />
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{name}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book;
