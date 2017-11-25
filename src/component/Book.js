import React from 'react';
import PropTypes from 'prop-types';

import BookControl from './BookControl';

class Book extends React.Component {
  static propTypes = {
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string).isRequired,
      cover: PropTypes.string,
    }).isRequired,
  };

  render() {
    const { info: {name, authors, cover}, color } = this.props;
    const bookCoverUrl = {
      backgroundImage: `url(${cover || ''})`,
    };
    return (
      <div className="book column is-narrow">
        <div className="book-top">
          <div className="book-cover" style={bookCoverUrl} />
          <BookControl color={color} />
        </div>
        <div className="book-title">{name}</div>
        <div className="book-authors">{authors.join(', ')}</div>
      </div>
    );
  }
}

export default Book;
