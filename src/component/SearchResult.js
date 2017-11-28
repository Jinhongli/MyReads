import React from 'react';

import Book from './Book';

function parseSarch(search) {
  const searchString = search.substr(1);
  const searchObject = {};
  searchString.split('&').forEach(param => {
    const [key, value] = param.split('=');
    searchObject[decodeURIComponent(key)] = decodeURIComponent(value);
  });
  return searchObject;
}

class SearchResult extends React.Component {
  render() {
    const { books, toggleBookMenu } = this.props;
    const searchKey = parseSarch(this.props.location.search).keyword;
    return (
      <section className="section">
        <div className="container">
          <h2 className="subtitle"> Result of <em>{searchKey}</em>: {books.length}</h2>
          <div className="columns is-mobile is-multiline is-centered">
            {books.map((book, index) => (
              <Book
                key={book.id}
                info={book}
                color="bg-red"
                toggleBookMenu={id => toggleBookMenu('search', id)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
export default SearchResult;
