import React from 'react';
import PropTypes from 'prop-types';

import BookShelf from './BookShelf';

class ListBooks extends React.Component {
  static propTypes = {
    books: PropTypes.shape({
      current: PropTypes.array.isRequired,
      want: PropTypes.array.isRequired,
      read: PropTypes.array.isRequired,
    }).isRequired,
    toggleBookMenu: PropTypes.func.isRequired,
    onListBooksClick: PropTypes.func.isRequired,
  };
  render() {
    const { books, toggleBookMenu, onListBooksClick } = this.props;
    return (
      <div className="list-books" onClick={() => onListBooksClick()}>
        <div className="list-books-content">
          <BookShelf
            type="currentlyReading"
            books={books.current}
            toggleBookMenu={id => {
              toggleBookMenu('current', id);
            }}
          />
          <BookShelf
            type="wantToRead"
            books={books.want}
            toggleBookMenu={id => {
              toggleBookMenu('want', id);
            }}
          />
          <BookShelf
            type="read"
            books={books.read}
            toggleBookMenu={id => {
              toggleBookMenu('read', id);
            }}
          />
        </div>
      </div>
    );
  }
}
export default ListBooks;
