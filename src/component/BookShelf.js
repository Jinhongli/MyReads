import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const shelfType = {
  currentlyReading: {
    title: 'Currently Reading',
    color: 'bg-red',
  },
  wantToRead: {
    title: 'Want to Read',
    color: 'bg-yellow',
  },
  read: {
    title: 'Read',
    color: 'bg-blue',
  },
};

class BookShelf extends React.Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    toggleBookMenu: PropTypes.func.isRequired,
  };
  render() {
    const { type, books, isUp, toggleBookMenu } = this.props;
    const number = document.body.clientWidth >= 680 ? 4 : 2;
    const booksShowInShelf = books.slice(0, number);
    return (
      <section className="section bookshelf">
        <div className="container">
          <h1
            className={
              'title bookshelf-title is-size-4 ' + shelfType[type].color
            }
            style={{
              backgroundColor: shelfType[type].color,
            }}
          >
            {shelfType[type].title}
          </h1>
          <div className="columns is-mobile is-multiline is-centered">
            {booksShowInShelf.map((book, index) => (
              <Book
                key={book.id}
                info={book}
                color={shelfType[type].color}
                toggleBookMenu={id => toggleBookMenu(id)}
                isRight={index === booksShowInShelf.length - 1}
                isUp={isUp}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default BookShelf;
