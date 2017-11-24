import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const shelfType = {
  1: 'Currently Reading',
  2: 'Want to Read',
  3: 'Read',
};

class BookShelf extends React.Component {
  static propTypes = {
    type: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
  };
  render() {
    const { type, number } = this.props;
    const books = [
      {
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },
      {
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },
    ].slice(0, number);
    return (
      <section className="section bookshelf">
        <div className="container">
          <h1 className="title bookshelf-title">{shelfType[type]}</h1>
          <div className="columns is-mobile is-multiline is-centered">
            {books.map(book => (
              <Book
                key={Math.random()
                  .toString(32)
                  .substr(-8)}
                info={book}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default BookShelf;
