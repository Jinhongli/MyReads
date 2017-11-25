import React from 'react';

import BookShelf from './BookShelf';

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-content">
          <BookShelf type={1} />
          <BookShelf type={2} />
          <BookShelf type={3} />
        </div>
      </div>
    );
  }
}
export default ListBooks;
