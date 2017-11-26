import React from 'react';

import BookShelf from './BookShelf';

class ListBooks extends React.Component {
  state = {
    current: [
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
    want: [
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
    read: [
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
  onListBooksClick() {
    this.setState(prevState => {
      return {
        current: prevState.current.map(book => {
          book.showMenu = false;
          return book;
        }),
        want: prevState.want.map(book => {
          book.showMenu = false;
          return book;
        }),
        read: prevState.read.map(book => {
          book.showMenu = false;
          return book;
        }),
      };
    });
  }
  toggleBookMenu(type, id) {
    console.log(`show ${type} book menu, book id: ${id}`);
    this.setState(prevState => {
      return {
        current: prevState.current.map(book => {
          if (type === 'current' && book.id === id) {
            book.showMenu = !book.showMenu;
          } else {
            book.showMenu = false;
          }
          return book;
        }),
        want: prevState.want.map(book => {
          if (type === 'want' && book.id === id) {
            book.showMenu = !book.showMenu;
          } else {
            book.showMenu = false;
          }
          return book;
        }),
        read: prevState.read.map(book => {
          if (type === 'read' && book.id === id) {
            book.showMenu = !book.showMenu;
          } else {
            book.showMenu = false;
          }
          return book;
        }),
      };
    });
  }

  render() {
    return (
      <div className="list-books" onClick={() => this.onListBooksClick()}>
        <div className="list-books-content">
          <BookShelf
            type={1}
            books={this.state.current}
            toggleBookMenu={id => {
              this.toggleBookMenu('current', id);
            }}
          />
          <BookShelf
            type={2}
            books={this.state.want}
            toggleBookMenu={id => {
              this.toggleBookMenu('want', id);
            }}
          />
          <BookShelf
            type={3}
            books={this.state.read}
            toggleBookMenu={id => {
              this.toggleBookMenu('read', id);
            }}
            isUp={true}
          />
        </div>
      </div>
    );
  }
}
export default ListBooks;
