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
  render() {
    const { type } = this.props;
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
      },{
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },{
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },{
        name: 'To Kill a Mockingbird',
        authors: ['Harper Lee'],
        cover:
          'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
      },
    ].slice(0, 4);
    return (
      <section className="section bookshelf">
        <div className="container">
          <h1 className="title bookshelf-title is-size-4" style={{
              backgroundColor: shelfType[type].color
          }}>{shelfType[type].title}</h1>
          <div className="columns is-mobile is-multiline is-centered">
            {books.map(book => (
              <Book
                key={Math.random()
                  .toString(32)
                  .substr(-8)}
                info={book}
                color={shelfType[type].color}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default BookShelf;
