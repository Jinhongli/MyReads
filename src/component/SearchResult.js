import React from 'react';

import Book from './Book';

function parseSarch(search){
  const searchString = search.substr(1);
  const searchObject = {};
  searchString.split('&').forEach(param => {
    const [key, value] = param.split('=');
    searchObject[decodeURIComponent(key)] = decodeURIComponent(value);
  } );
  return searchObject;
}

class SearchResult extends React.Component {
  render() {
    const searchKey = parseSarch(this.props.location.search).keyword;
    return (
      <section className="section">
        <div className="container">
          <h2 className="subtitle"> Result of {searchKey}:</h2>
          <div className="columns is-mobile is-multiline is-centered">
            <Book
              key={Math.random()
                .toString(32)
                .substr(-8)}
              info={{
                name: 'To Kill a Mockingbird',
                authors: ['Harper Lee'],
                cover:
                  'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api',
              }}
              color="#3273dc"
            />
          </div>
        </div>
      </section>
    );
  }
}
export default SearchResult;
