import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const shelfType = {
  1: {
    title: 'Currently Reading',
    color: '#209cee',
  },
  2: {
    title: 'Want to Read',
    color: '#60d160',
  },
  3: {
    title: 'Read',
    color: '#f9dd56',
  },
};

class BookShelf extends React.Component {
  static propTypes = {
    type: PropTypes.number.isRequired,
  };
  state = {
    books: [
      {
        id: 1,
        showMenu: false,
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },
      {
        id: 2,
        showMenu: false,
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },
      {
        id: 3,
        showMenu: false,
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },
      {
        id: 4,
        showMenu: false,
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },
      {
        id: 5,
        showMenu: false,
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },
    ],
  };
  render() {
    const { type, books, isUp } = this.props;
    const number = document.body.clientWidth >= 680 ? 4 : 2;
    const booksShowInShelf = books.slice(0, number);
    return (
      <section className="section bookshelf">
        <div className="container">
          <h1
            className="title bookshelf-title is-size-4"
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
                toggleBookMenu={id => this.props.toggleBookMenu(id)}
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
