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
    const loading = <span className="fa fa-spinner fa-spin fa-3x fa-fw"></span>;
    return (
      <section className="section">
        <div className="container">  
          <div className="columns is-mobile is-multiline is-centered">
            {typeof books === 'string' ? (<h2 className="subtitle">No Result</h2>) : (
              books.length ? (
                books.map((book, index) => (
                <Book
                  key={book.id}
                  info={book}
                  color="bg-red"
                  toggleBookMenu={id => toggleBookMenu('search', id)}
                />
              ))
            ) : loading
            )}
          </div>
        </div>
      </section>
    );
  }
}
export default SearchResult;
